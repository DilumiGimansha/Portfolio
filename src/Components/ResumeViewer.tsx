import { useCallback, useEffect, useRef, useState } from "react";
import { ActionIcon, Badge, Loader, Modal, ScrollArea, Tooltip, useMatches } from "@mantine/core";
import { IconArrowBigDownLineFilled, IconZoomIn, IconZoomOut } from "@tabler/icons-react";
// import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf.mjs";
import { GlobalWorkerOptions, version, getDocument  } from "pdfjs-dist";
import { assetUrl } from "../assets";

GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

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
    const resumeUrl = assetUrl("Resume.pdf");

    // Renders every page of the loaded document onto its own canvas at the
    // given zoom factor, scaled to fit the available preview width.
    // DPR fix: bake devicePixelRatio into the viewport scale so canvas has
    // enough physical pixels on retina/high-DPI screens — eliminates blur.
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

            // Physical canvas pixels = dpr× larger; CSS size = logical size → crisp on all screens.
            canvas.width = Math.floor(viewport.width);
            canvas.height = Math.floor(viewport.height);
            canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
            canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;
            context.clearRect(0, 0, canvas.width, canvas.height);

            await page.render({ canvasContext: context, viewport }).promise;
        }
    }, []);

    // Loads the PDF document and discovers its page count whenever the modal opens.
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

                const pdf = await getDocument({
  url: resumeUrl,
  withCredentials: false
}).promise;
                if (cancelled) return;

                pdfDocRef.current = pdf;
                setNumPages(pdf.numPages);
            } catch (err) {
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

    // Renders (or re-renders) every page once the canvases exist in the DOM,
    // and again whenever zoom or the window size changes.
    useEffect(() => {
        if (!numPages) return;

        let cancelled = false;

        const render = async () => {
            try {
                await renderAllPages(zoom);
                if (!cancelled) setLoading(false);
            } catch (err) {
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

    return <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" centered className="font-mono" opened={props.opened} onClose={props.close}>
        <Modal.Overlay className="!backdrop-opacity-10 blur-sm" />
        <Modal.Content className="!rounded-3xl !w-[min(94vw,900px)] !max-h-[92vh]">
            <Modal.Header className="!bg-bgColor xs-mx:!p-2 !border-primaryColor xs-mx:!border !border-2 xs-mx:!border-b-0 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
                <Modal.Title data-autofocus className="!text-4xl xs-mx:!text-2xl text-white flex gap-3 items-center !font-bold">Resume
                    {numPages > 1 && (
                        <Badge variant="outline" color="#64FFDA" className="!text-primaryColor !normal-case !font-normal xs-mx:!hidden">
                            {numPages} pages
                        </Badge>
                    )}
                    {showPages && (
                        <div className="flex items-center gap-1 rounded-full border-2 border-primaryColor bg-bgColor/95 px-2 py-1 shadow-lg">
                            <Tooltip label="Zoom out">
                                <ActionIcon
                                    className="!text-primaryColor"
                                    variant="subtle"
                                    color="#64FFDA"
                                    radius="xl"
                                    size="sm"
                                    disabled={zoom <= MIN_ZOOM}
                                    onClick={() => adjustZoom(-ZOOM_STEP)}
                                >
                                    <IconZoomOut size={16} />
                                </ActionIcon>
                            </Tooltip>
                            <span className="min-w-[3.5ch] text-center text-xs text-textColor">{Math.round(zoom * 100)}%</span>
                            <Tooltip label="Zoom in">
                                <ActionIcon
                                    className="!text-primaryColor"
                                    variant="subtle"
                                    color="#64FFDA"
                                    radius="xl"
                                    size="sm"
                                    disabled={zoom >= MAX_ZOOM}
                                    onClick={() => adjustZoom(ZOOM_STEP)}
                                >
                                    <IconZoomIn size={16} />
                                </ActionIcon>
                            </Tooltip>
                        </div>
                    )}
                    <Tooltip label="Download" className="!text-bgColor" color="#64FFDA" position="right" offset={5}>
                        <ActionIcon className="!text-primaryColor" component="a" href={resumeUrl} size={btn} download="Resume.pdf" variant="outline" color="#64FFDA">
                            <IconArrowBigDownLineFilled className="xs-mx:!w-[16px]" />
                        </ActionIcon>
                    </Tooltip>
                </Modal.Title>
                <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-red-500" />
            </Modal.Header>
            <Modal.Body className="!bg-bgColor xs-mx:!p-2 !p-4 !pt-2 !border-primaryColor !border-2 xs-mx:!border xs-mx:!border-t-0 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
                <div ref={previewRef} className="relative w-full h-[78vh] min-h-[420px] overflow-auto rounded-2xl bg-white/5 p-2">
                    {loading && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-bgColor/90 text-textColor">
                            <Loader color="#64FFDA" size="md" />
                            <span>Loading resume...</span>
                        </div>
                    )}

                    {error && (
                        <div className="flex h-full items-center justify-center">
                            <div className="text-center text-textColor">
                                <div className="mb-2">Resume preview is unavailable.</div>
                                <a className="text-primaryColor underline" href={resumeUrl} target="_blank" rel="noreferrer">Open resume PDF</a>
                            </div>
                        </div>
                    )}

                    {!error && (
                        // Blur-to-clear reveal: starts blurred+invisible while loading,
                        // transitions to sharp+visible once pages are fully rendered.
                        <div
                            className="flex flex-col items-center gap-6 py-2"
                            style={{
                                filter: showPages ? "blur(0px)" : "blur(14px)",
                                opacity: showPages ? 1 : 0,
                                transition: showPages
                                    ? "filter 0.55s ease-out, opacity 0.45s ease-out"
                                    : "none",
                            }}
                        >
                            {Array.from({ length: numPages }).map((_, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    {numPages > 1 && (
                                        <span className="text-xs tracking-widest text-textColor/50">
                                            PAGE {String(i + 1).padStart(2, "0")} / {String(numPages).padStart(2, "0")}
                                        </span>
                                    )}
                                    <canvas
                                        ref={(el) => { canvasRefs.current[i] = el; }}
                                        className="block max-w-full rounded-lg bg-white shadow-[0_0_10px_0_#00000080]"
                                    />
                                </div>
                            ))}
                        </div>
                    )}


                </div>
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>;
};

export default ResumeViewer;