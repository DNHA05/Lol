export default async function handler(req, res) {
    const { url } = req.query;
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    if (!url) {
        return res.status(400).json({ error: "Thiếu tham số URL" });
    }
    const API_KEY = 'e58da414-c1bc-481f-b54e-bec9291558c5';

    try {
        const response = await fetch(`https://api.izen.lol/v1/bypass?url=${encodeURIComponent(url)}`, {
            method: 'GET',
            headers: {
                "x-api-key": API_KEY,
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Lỗi kết nối với API" });
    }
}
