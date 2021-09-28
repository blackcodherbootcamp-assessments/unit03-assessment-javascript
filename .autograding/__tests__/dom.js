/**
 * @jest-environment jsdom
 */
const { parseHTML, readFile } = require("../setup.js");
const { dates } = require("../../js/data.js");
const html = readFile("../index.html");
const doc = parseHTML(html);

// HTML tests
describe("DOM", function () {
  beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
    require("../../js/index.js");
  });

  afterAll(() => {
    // restore the original func after test
    jest.resetModules();
  });

  test("found expected timeline item content", () => {
    const timelineElements = [
      ...document.querySelectorAll(".timeline .timeline-item"),
    ];
    // generate unique IDs to enable base element matching
    for(let i = 0; i < timelineElements.length; i++){
        const context = timelineElements[i];
        const id = context.getAttribute( "id" )

        if(!id){
            context.setAttribute( "id", `__generated__${i}`);
        }
    }

    // return all source data items that match a rendered element
    // by comparing the title, date and summary values
    const listedDates = dates.filter(
      (dateItem) =>
        typeof timelineElements.find((el) => {
          const id = el.getAttribute("id");
          const titleElement = el.querySelector(`#${id} h2.timeline-item-title`);
          const dateElement = el.querySelector(`#${id} span.timeline-item-date`);
          const summaryElement = el.querySelector(`#${id} .timeline-item-summary`);

          return (
            dateItem.title ===
              (titleElement ? titleElement.textContent.trim() : "") &&
            dateItem.date ===
              (dateElement ? dateElement.textContent.trim() : "") &&
            dateItem.summary ===
              (summaryElement ? summaryElement.textContent.trim() : "")
          );
        }) !== 'undefined'
    );

    expect(dates.length).toBe(listedDates.length);
  });

  test("found expected modal content", () => {
    let modalElement = null;
    let dateElement = null;
    let titleElement = null;
    let imageElement = null;
    // select first opener element
    const openerElement = document.querySelector(".timeline .timeline-item-more-info");
    
    if(openerElement){
      openerElement.click();

      modalElement = document.querySelector("div#modal-container");
      dateElement = document.querySelector("div#modal-container #modal-date");
      titleElement = document.querySelector("div#modal-container #modal-title");
      imageElement = document.querySelector("div#modal-container img#modal-image");
    }

    expect(modalElement).not.toEqual(null);
    expect(dateElement).not.toEqual(null);
    expect(titleElement).not.toEqual(null);
    expect(imageElement).not.toEqual(null);
  });
});
