const publicUrl = process.env.PUBLIC_URL || "";

const assetUrl = (path: string) => `${publicUrl}/${path.replace(/^\/+/, "")}`;

export { assetUrl };
