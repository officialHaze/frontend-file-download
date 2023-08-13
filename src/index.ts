export class FileDownload
{
    static downloadByBlob(blobData: Blob, filename: string, errback: (err: unknown)=>void): void
    {
        try
        {
            // Create a blob url with the blobdata
            const blobURL = URL.createObjectURL(blobData)
            console.log(`Blob URL created`)
            // Create an anchor element and assign the necessary attrs
            const a = Object.assign(document.createElement("a"), {
                href: blobURL,
                style: "display:none",
                download: filename
            })
            // Append the anchor tag
            document.body.appendChild(a)
            // Click the anchor tag
            a.click()
            // Revoke the blob url
            URL.revokeObjectURL(blobURL)
            console.log('Blob url removed!')
            // Remove the anchor tag
            a.remove()
        }
        catch(err)
        {
            errback(err)
        }
    }
}
