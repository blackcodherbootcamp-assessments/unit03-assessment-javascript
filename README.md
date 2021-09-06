# JavaScript Assessment

For your unit 3 assessment you are required to work with your study group as an agile team to create an animated interactive timeline for Mayme's Bakery. The interactivity (behaviour/actions) of timeline should be agreed upon by all group members.

## Who is Mayme's Bakery?

They are family owned business whose baked goods have been shipped worldwide.

They would love to display a history of baking and cakes in an online interactive timeline.

## How to organise yourselves for group work

We have provided some initial user stories. Your group can choose which project management tool you'd like to use (e.g. trello, github projects). As the project continues add more user stories and/or tasks until the project is complete.

### User Stories

1. **As a** user, **I want to** see the title of the timeline, **so that** I know what the timeline is about
1. **As a** user, **I want to** see the summary of each historical item, **so that** I can view all the historical items in one place
1. **As a** user, **I want to** see a summary of all the historical items in place, **so that** I can see a brief history (in date order) in one place
1. **As a** user, **I want to** see more details on a particular item, **so that** I can see the full information (including an image)
1. **As a** user, **I want** **to** dismiss the full details of a single historical item, **so that** I can return to the timeline of item
1. **As a** developer, **I want t0** deploy the changes made to the timeline, **so that** timeline can be viewed publicly

## Starter Files

We have provided two files to get you started:

1. `index.html`
1. `data.js`

### HTML

The provided `index.html` includes:

```html
<script type="module" src="index.js"></script>
```

Having `type="module"` means you can the ES6 feature `modules` (refer to the slides for a reminder of what `modules` are). `src="index.js"` indicates your main javascript file must be named `index.js`.

### Data

We have provided an array of objects with the data that should be displayed in your timeline. This data can be found in the `data.js` file. If you chose, you can add more data to the file, but this is the minimum amount of data you must display in your timeline.

## Assessment Criteria

The only HTML you should add to the `body` is in step 1. Everything else should be done in JavaScript.

1. In your HTML file add a `<div>` with the class name `timeline`.
1. Loop over the provided array of objects to create:
   1. A `div` with the class name `.timeline-item`. Inside the `div` should be:
      1. `h2` with the title of each timeline item
      1. `span` with the class name `date`. This should have the date of each timeline item
1. Button with the class name `up-button` to jump ahead 2 or 3 items.
1. Button with the class name `down-button` to jump back 2 or 3 items.
1. The timeline must be deployed to Netlify

### CSS

All stylings (css) is completely up to you, but must be in a folder named `styles`.

## Examples

<!-- add examples from slides to here -->

## How to submit

You must push all the code to your group project repo.
