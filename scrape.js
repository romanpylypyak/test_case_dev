const axios = require('axios')
const json_url = 'https://xkcd.com/';
const json_zero = 'info.0.json';
const count = 10;
const cheerio = require('cheerio');
const { exists } = require('fs');

const get_json = async () => {
    let result = await axios.get(json_url+json_zero);
    let data = [];
    if (result) {
        let number = result.data.num;
        if (!number) {
            throw Error('Number not found');
        }        
        for (let iter = number - count; iter < number; iter++) {
            let row = await axios.get(json_url+iter+'/'+json_zero);
            let row_data = row.data;
            if (!row_data) {
                throw Error('Data not found');
            }
            
            row_data.date = new Date(row_data.year,row_data.month,row_data.day).toISOString();
            if (!row_data.description) row_data.description = row_data.title;
            row_data.link = json_url+iter;
            data.push(row_data);
        }
    }
    return data;
}

const parse_xml = async () => {
    let result = await axios.get('http://feeds.feedburner.com/PoorlyDrawnLines');
    const $ = cheerio.load(result.data, { xmlMode: true });
    let data = [];
    $('item').each(function() {
        let json = {
            title: $(this).find('title').text(),
            date: $(this).find('pubDate').text(),
            link: $(this).find('guid').text(),
            img: $(removeCDATA($(this).find('content\\:encoded').text())).find('img:first').attr('src'),
            description: $(this).find('title').text()
        }
        data.push(json);
    })
    return data;
}

const removeCDATA = (string) => {
    return string.replace('<![CDATA[', '').replace(']]>', '').trim();
}


module.exports = {
    get_json,
    parse_xml
}