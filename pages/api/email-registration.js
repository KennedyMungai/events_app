import path from 'path'
import fs from 'fs'

const buildPath = () =>
{
    return path.join(process.cwd, 'data', 'data.json')
}

const extractData = (filePath) => 
{
    const jsonData = fs.readFileSync(filePath)
    const data = JSON.parse(jsonData)

    return data
}

export default function handler(req, res)
{
    const { method } = req

    // Access the data
    // Extract the data (Inside the allEvents object)

    const filePath = buildPath()
    const data = extractData(filePath)

    const { allEvents, event_categories } = data

    if (method === 'POST')
    {
        const { email, eventId } = req.body

        res
            .status(200)
            .json(
                {
                    message: `You have been registered successfully with the email: ${email} ${eventId}`
                }
            )
    }
}