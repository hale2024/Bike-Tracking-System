import prisma from "../../../utils/prisma";

// POST /api/tracker
export default async function handle(req, res) {
    const { tracker_id } = req.body;

    const result = await prisma.tracker.findUnique({
        where: {
            id: tracker_id
        },
    });
    if(result) res.json(result);
    else res.status(404)
}