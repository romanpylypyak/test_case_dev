const scrape = require('./scrape')

test('get_json_length', async() => {
    let result = await scrape.get_json()
    expect(result.length).toBe(10);
});

test('get_json_keys', async() => {
    let result = await scrape.get_json()
    for (let item of result) {
        expect(item.title).toBeDefined()
        expect(item.date).toBeDefined()
        expect(item.link).toBeDefined()
        expect(item.img).toBeDefined()
        expect(item.description).toBeDefined()
    }

});

test('parse_xml_length', async() => {
    let result = await scrape.parse_xml()
    expect(result.length).toBe(10);
});

test('parse_xml_keys', async() => {
    let result = await scrape.parse_xml()
    for (let item of result) {
        expect(item.title).toBeDefined()
        expect(item.date).toBeDefined()
        expect(item.link).toBeDefined()
        expect(item.img).toBeDefined()
        expect(item.description).toBeDefined()    
    }
});