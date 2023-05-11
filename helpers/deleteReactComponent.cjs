const fsPromises = require('fs/promises');
const path = require('path');
const colors = require('colors');


async function main(args) {
    if (Array.isArray(args)) {
        const promises = args.map(async component => {
            try {
                
            await fsPromises.rm(path.join(__dirname, "..", "src", "components", `${component}`, "*"), {
                force: true,
            });
            await fsPromises.rm(path.join(__dirname, "..", "src", "components", `${component}`), {
                recursive: true,
                force: true,
                maxRetries: 10
            })
            console.log(colors.blue(`Component removed successfully : ${component}`));
            } catch (error) {
                console.log(colors.red(`Error removing component : ${component}`));
                console.log(error?.message);
            }
        });

        try {
            await Promise.all(promises);
            console.log(colors.yellow("All components removed successfully."));
            process.exit(0);
        } catch (error) {
            console.log(colors.red("Error creating components."));
            process.exit(1);
        }
    }
}

main(process.argv.slice(2));