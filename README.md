![screenshot of a the formatted resume in a web browser](/screengrabs/screenshot_0.png "resume preview")

# Dynamic Resumes for the Dynamic Being

This tutorial shows you how to set up your resume using a spreadsheet so you can create different versions of your work history with the click of a checkbox. The data is automatically formatted into a single-page, print-friendly layout using HTML, CSS, JavaScript, and jQuery. Since the resulting file is a webpage, you can also use it to host your resume online. Detailed instructions and template previews can be found at [dynamic-resume-preview.netlify.app](https://dynamic-resumes.netlify.app/). An abbreviated version of the instructions follows below.

## Instructions

To start, make a copy of this [Google Spreadsheet](https://docs.google.com/spreadsheets/d/194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/edit?usp=sharing). Change the sharing settings so that "anyone with the link" can view the document, then copy the share URL.

Then, clone this repository and follow the instructions at the top of the `script.js` to connect your spreadsheet to the script.

From there, you can customize the content from within the Google Spreadsheet. Make sure to always "freeze" the first row of each tab, since this will let the API know how to find the column headers. If you change the names of any tabs or columns, you'll have to update them in the `script.js` as well.

The special ingredient here is the `visibility` column, which allows you to include or exclude an experience in a quick and non-destructive way. This is helpful when you need to refine your past experiences for a specific role, or if you want to keep your past and current resume data all in one place.

![a user checks two unchecked 'visibility' boxes on the spreadsheet, then refreshes the locally-hosted web page to watch it add the new rows in live time](/screengrabs/screenrec.gif "resume updating in live time")

Once you're happy with the contents, serve your site to localhost in the browser and use the `print` command to open up a preview of your fully formatted resume. You can either print the document directly or save the file as a PDF to send off into the world.

![a print preview of the resume, perfectly formatted for a standard A4 sheet](/screengrabs/screenshot_1.png "print preview")

## Notes

One thing to note as you use this template is that sometimes the content will spill over one page. This is a good indicator that you need to refine the number of experiences you are including. If the spillage is minor, I usually tweak the content and/or styling manually to make sure everything fits on one page.

## Credits

This template was made by Jo Suk using Ben Borgers' [opensheet API](https://github.com/benborgers/opensheet#readme) and inspired by Chia Amisola's [sheet sites](https://ambient.institute/i/sheets/) tutorial.
