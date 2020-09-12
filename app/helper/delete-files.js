const fs = require('fs');
const path = require('path');


const deleteFileinTmpDir = async () => {
    const directory = './tmp';
    const tempPath = path.resolve(directory)

    await fs.readdir(tempPath, async (err, files) => {
        if (err) console.log(err);

        console.log(tempPath)
        for (const file of files) {
            console.log(file)
            await fs.unlink(path.join(tempPath, file), err => {
                if (err) console.log(err);
            });
        }
    });
}

module.exports = { deleteFileinTmpDir }