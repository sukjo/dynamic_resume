# Resume Template

## This documentation is a WIP!

This template allows you to store your résumé data in a Google Spreadsheet and automatically format it in a single-page, print-ready layout using HTML/CSS/JavaScript.

To start, make a copy of this [Google Spreadsheet](https://docs.google.com/spreadsheets/d/194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/edit?usp=sharing). Change the sharing settings so that "anyone with the link" can view the document, then copy the share URL. Follow the instructions at the top of the `script.js` to connect your spreadsheet to the script.

All the content within the spreadsheet is adjustable, but make sure to always "freeze" the first row of each tab, since this will let the API know how to find the column headers.

The special ingredient here is the `visibility` column, which allows you to include or exclude a row of data in your résumé. This is helpful when you need to refine your past experiences for a specific role in a quick and non-destructive way.

Another thing to note: sometimes the content will spill over one page. This is a good indicator that you need to refine the number of experiences you are including. If the spillage is minor, I usually tweak the content and/or styling to make sure everything fits on one page.

This template was made by Jo Suk using the [opensheet API](https://github.com/benborgers/opensheet#readme) created by Ben Borgers and Chia Amisola's [sheet sites](https://ambient.institute/i/sheets/) tutorial.
