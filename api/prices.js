export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.energy-charts.info/price?bzn=NL"
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Fout ophalen prijzen" });
  }
}
