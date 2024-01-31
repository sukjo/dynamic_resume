# Résumé Template

This template allows you to store your résumé data in a Google Spreadsheet and automatically format it in a single-page, print-ready layout using HTML/CSS/JavaScript.

To start, make a copy of this [Google Spreadsheet](https://docs.google.com/spreadsheets/d/194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/edit?usp=sharing). Change the sharing settings so that "anyone with the link" can view the document, then copy the share URL. Follow the instructions at the top of the `script.js` to connect your spreadsheet to the script.

From there, you can customize the content within the spreadsheet. Make sure to always "freeze" the first row of each tab, since this will let the API know how to find the column headers. If you change the names of any tabs or columns, you'll have to update them in the `script.js` as well.

The special ingredient here is the `visibility` column, which allows you to include or exclude an experience in a quick and non-destructive way. This is helpful when you need to refine your past experiences for a specific role, or if you want to keep your past and current résumé data all in one place.

Once you're happy with the contents, serve your site to localhost in the browser and use the `print` command to open up a preview of your fully formatted résumé. You can either print the document directly or save the file as a PDF to send off into the world.

One thing to note as you use this template is that sometimes the content will spill over one page. This is a good indicator that you need to refine the number of experiences you are including. If the spillage is minor, I usually tweak the content and/or styling to make sure everything fits on one page.

This template was made by Jo Suk using Ben Borgers' [opensheet API](https://github.com/benborgers/opensheet#readme) and Chia Amisola's [sheet sites](https://ambient.institute/i/sheets/) tutorial.
