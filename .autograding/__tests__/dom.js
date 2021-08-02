/**
 * @jest-environment jsdom
 */
const { parseHTML, readFile } = require('../setup.js');
const { dates } = require('../../src/js/dates.js');
const html = readFile('../src/index.html');
const doc = parseHTML(html);

// HTML tests
describe('DOM', function () {
    beforeAll(() => {
        document.documentElement.innerHTML = html.toString();
        require('../../src/js/index.js');
    });

    afterAll(() => {
        // restore the original func after test
        jest.resetModules();
    });

    test('found timeline items', () => {
        expect(document.getElementsByClassName('timeline-item').length).toBeGreaterThanOrEqual(dates.length);
    });

    test('found expected timeline item content', () => {
        const headings = document.querySelectorAll('.timeline .timeline-item h2');
        const spans = document.querySelectorAll('.timeline .timeline-item span.date');
        
        expect(headings.length).toBeGreaterThanOrEqual(dates.length);
        expect(spans.length).toBe(headings.length);
    });
});
