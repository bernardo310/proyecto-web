const puppeteer = require('puppeteer');
const Registro = require('../models/Registro');

const urlGobierno = 'http://compras.funcionpublica.gob.mx/ConsultaPublicaDGRSP/';

//buscar registros segun un nombre
exports.getBuscar = async (req, res, next) => {
    const registros = [];
    try {
        //go to url main page
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36');
        await page.goto(urlGobierno, { waitUntil: 'load' });
        
        //click registros
        const button = await page.$x("//a[contains(text(), 'Nombre ')]");
        if (button.length > 0) await button[0].click();
        else throw new Error("Button not found");
        await page.waitForNavigation({ waitUntil: 'load' });
        
        //input name
        await page.type("[id='consultaForm:j_id32:0:s4nci0n_InputText']", `${req.query.nombre}`);
        await page.waitFor(20)    ;    
        
        //search
        const submitButton = await page.$("[id='consultaForm\:j_id32\:generarConsulta']")
        submitButton.click();
        await page.waitForNavigation({ waitUntil: 'load' });

        //collect data
        const rows = await page.$$('.rich-table-row'); 
        for (let i = 0; i < rows.length; i++) {
            const cells = await rows[i].$$('td');
            let temp = [];
            for (let j = 0; j < cells.length; j++) {
                const cell = await (await cells[j].getProperty('innerText')).jsonValue();
                temp.push(cell);
            }
            //filter imcomplete/censored data
            if(temp[3] == '') continue;
            const r = new Registro(...temp);
            registros.push(r);
        }
    } catch (e) {
        console.log('error backend', e);
    }

    res.status(200).json({
        registros: registros
    });
};

exports.getValorActual = async (valor) => {
    const registros = [];
    try {
        //go to url main page
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Safari/537.36');
        await page.goto(urlGobierno, { waitUntil: 'load' });
        
        //click registros
        const button = await page.$x("//a[contains(text(), 'Nombre ')]");
        if (button.length > 0) await button[0].click();
        else throw new Error("Button not found");
        await page.waitForNavigation({ waitUntil: 'load' });
        
        //input name
        await page.type("[id='consultaForm:j_id32:0:s4nci0n_InputText']", `${valor}`);
        await page.waitFor(20)    ;    
        
        //search
        const submitButton = await page.$("[id='consultaForm\:j_id32\:generarConsulta']")
        submitButton.click();
        await page.waitForNavigation({ waitUntil: 'load' });

        //collect data
        const rows = await page.$$('.rich-table-row'); 
        for (let i = 0; i < rows.length; i++) {
            const cells = await rows[i].$$('td');
            let temp = [];
            for (let j = 0; j < cells.length; j++) {
                const cell = await (await cells[j].getProperty('innerText')).jsonValue();
                temp.push(cell);
            }
            //filter imcomplete/censored data
            if(temp[3] == '') continue;
            const r = new Registro(...temp);
            registros.push(r);
        }
    } catch (e) {
        console.log('error backend', e);
    }
    return registros.length;
}