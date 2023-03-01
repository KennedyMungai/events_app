import path from 'path'

const buildPath = () =>
{

}

export default function handler(req, res)
{
    const { method } = req

    // Access the data
    // Extract the data (Inside the allEvents object)


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