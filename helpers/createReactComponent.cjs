const fsPromises = require('fs/promises');
const path = require('path');
const colors = require('colors');


async function createComponent(args) {
    if (!Array.isArray(args)) return console.log("Usage: createComponent <args[]>, Expected an array of component names.");
    else {
        const promises = args.map(async component => {
            const data = `import React from 'react';\n
            export default function ${component}(){
                return (
                    <div>
                        ${component}
                    </div>
                )
            }
            `
            try {

                await fsPromises.mkdir(path.join(__dirname, "..","src","components", `${component}`));
                await fsPromises.writeFile(path.join(__dirname, "..","src","components", `${component}`,`${component}.jsx`),data);
                console.log(colors.blue(`Component created successfully : ${component}`));
            } catch (error) {
                console.log(colors.red(`Error creating component ${component}`));
                console.log(error?.message);
            }
        }); //Map ends here , returns pending promise

        try {
            await Promise.all(promises);
            console.log(colors.yellow("All components created successfully."));
            process.exit(0);
        } catch (error) {
            console.log(colors.red("Error creating components."));
            process.exit(1);
        }
    };
}


createComponent(process.argv.slice(2))