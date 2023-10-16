const fs = require('fs')
const puppeteer = require('puppeteer')
const jsdom = require('jsdom')

    ; (async () => {
        const HTMLcontent = fs.readFileSync('.next/server/pages/cv.html', 'utf8')
        const dom = new jsdom.JSDOM(HTMLcontent);
        const cv = dom.window.document.querySelector('.curriculum').innerHTML;
        // const CSSpath = '.next/static/css/'
        // const CSSfiles = fs.readdirSync(CSSpath).filter((fn) => fn.endsWith('.css'))
        // const CSScontent = fs.readFileSync(CSSpath + CSSfiles[0], 'utf8')
        const CSScontent = fs.readFileSync('./src/css/cv.css', 'utf8');

        const browser = await puppeteer.launch({
            headless: "new",
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--font-render-hinting=none',
            ],
        })
        const page = await browser.newPage()
        await page.setContent(cv, {
            waitUntil: ['networkidle0'],
        })
        await page.addStyleTag({ content: CSScontent })
        await page.evaluateHandle('document.fonts.ready')

        await page.pdf({
            path: 'public/cv.pdf',
            format: 'A4',
            // scale: 0.67,
            margin: {
                top: '0mm',
                left: '0mm',
                right: '0mm',
                bottom: '0mm',
            },
        })
        await browser.close()
    })()