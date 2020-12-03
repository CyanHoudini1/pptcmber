

const HEADLESS = process.env.HEADLESS !== "false";
const USERNAME = "nils+beta@shyftplan.com";
const PASSWORD = "123456789";


    const amountOfGroups = async (amountGroups) => {
    await this.page.waitForSelector('#general-setup-form > div:nth-child(2) > div > div:nth-child(3) > button');
    for(let i=0; i <= {amountGroups}; i++){
        await this.page.click('#general-setup-form > div:nth-child(2) > div > div:nth-child(3) > button');
        }
    };

    async function  amountOfWeeks (amountWeeks){
    await this.page.waitForSelector('#general-setup-form > div:nth-child(3) > div > div:nth-child(3) > button');
    for(let i=0; i <= {amountWeeks}; i++){
        await this.page.click('#general-setup-form > div:nth-child(3) > div > div:nth-child(3) > button');
        }
    }

    async function  enterAnchorDate(day,month,year) {
        
    };
