export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: "Bad Request - Missing fields" });
    }
  }
  return res.status(400).json({ message: "Bad Request" });
}
