import { useCallback, useEffect, useRef, useState } from "react";
import { ActionIcon, Badge, Loader, Modal, ScrollArea, Tooltip, useMatches } from "@mantine/core";
import { IconArrowBigDownLineFilled, IconZoomIn, IconZoomOut } from "@tabler/icons-react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf.mjs";
import { assetUrl } from "../assets";

GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
    import.meta.url,
).toString();

const MIN_ZOOM = 0.6;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.2;

const ResumeViewer = (props: any) => {
    const previewRef = useRef<HTMLDivElement>(null);
    const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
    const pdfDocRef = useRef<any>(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [numPages, setNumPages] = useState(0);
    const [zoom, setZoom] = useState(1);

    const btn = useMatches({
        xs: "xs",
        sm: "sm",
        md: "md",
    });

    // ✅ FIX: FORCE ABSOLUTE URL (CRITICAL FOR GITHUB PAGES)
    const resumeUrl = new URL(
        assetUrl("Resume.pdf"),
        window.location.origin
    ).toString();

    const renderAllPages = useCallback(async (zoomFactor: number) => {
        const pdf = pdfDocRef.current;
        const preview = previewRef.current;
        if (!pdf || !preview) return;

        const availableWidth = Math.max(preview.clientWidth - 16, 300);

        for (let i = 1; i <= pdf.numPages; i++) {
            const canvas = canvasRefs.current[i - 1];
            if (!canvas) continue;

            const page = await pdf.getPage(i);
            const baseViewport = page.getViewport({ scale: 1 });
            const dpr = window.devicePixelRatio || 1;
            const fitScale = Math.min(availableWidth / baseViewport.width, 1.6);
            const viewport = page.getViewport({ scale: fitScale * zoomFactor * dpr });

            const context = canvas.getContext("2d");
            if (!context) continue;

            canvas.width = Math.floor(viewport.width);
            canvas.height = Math.floor(viewport.height);
            canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
            canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;

            context.clearRect(0, 0, canvas.width, canvas.height);
            await page.render({ canvasContext: context, viewport }).promise;
        }
    }, []);

    useEffect(() => {
        if (!props.opened) {
            pdfDocRef.current?.destroy?.();
            pdfDocRef.current = null;
            canvasRefs.current = [];
            setNumPages(0);
            setZoom(1);
            return;
        }

        let cancelled = false;

        const loadDocument = async () => {
            try {
                setLoading(true);
                setError(false);
                setNumPages(0);

                // ✅ FIX: Add safer config
                const pdf = await getDocument({
                    url: resumeUrl,
                    withCredentials: false
                }).promise;

                if (cancelled) return;

                pdfDocRef.current = pdf;
                setNumPages(pdf.numPages);
            } catch (err) {
                console.error("PDF load error:", err); // 👈 helps debugging
                if (!cancelled) {
                    setLoading(false);
                    setError(true);
                }
            }
        };

        loadDocument();

        return () => {
            cancelled = true;
        };
    }, [props.opened, resumeUrl]);

    useEffect(() => {
        if (!numPages) return;

        let cancelled = false;

        const render = async () => {
            try {
                await renderAllPages(zoom);
                if (!cancelled) setLoading(false);
            } catch (err) {
                console.error("Render error:", err);
                if (!cancelled) {
                    setLoading(false);
                    setError(true);
                }
            }
        };

        render();

        const handleResize = () => render();
        window.addEventListener("resize", handleResize);

        return () => {
            cancelled = true;
            window.removeEventListener("resize", handleResize);
        };
    }, [numPages, zoom, renderAllPages]);

    const adjustZoom = (delta: number) => {
        setZoom((prev) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, +(prev + delta).toFixed(2))));
    };

    const showPages = !loading && !error && numPages > 0;

    return (
        <Modal.Root
            scrollAreaComponent={ScrollArea.Autosize}
            size="auto"
            centered
            opened={props.opened}
            onClose={props.close}
        >
            <Modal.Overlay />
            <Modal.Content>
                <Modal.Header>
                    <Modal.Title>Resume</Modal.Title>

                    <Tooltip label="Download">
                        <ActionIcon
                            component="a"
                            href={resumeUrl}
                            download="Resume.pdf"
                        >
                            <IconArrowBigDownLineFilled />
                        </ActionIcon>
                    </Tooltip>
                </Modal.Header>

                <Modal.Body>
                    <div ref={previewRef}>
                        {loading && <Loader />}

                        {error && (
                            <div>
                                Resume preview unavailable.<br />
                                <a href={resumeUrl} target="_blank">
                                    Open PDF
                                </a>
                            </div>
                        )}

                        {!error && (
                            <div>
                                {Array.from({ length: numPages }).map((_, i) => (
                                    <canvas
                                        key={i}
                                        ref={(el) => { canvasRefs.current[i] = el; }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
};

export default ResumeViewer;