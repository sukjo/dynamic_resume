/* Replace the string of characters in the global variables below with the 
share link to your Google Spreadsheet.

Grab only the characters between "https://docs.google.com/spreadsheets/d/" 
and  "/edit?usp=sharing" in the URL. 

Then add "/1", "/2", etc. to point to a specific tab in the spreadsheet. 
These indexes are 1-based and determined automatically. */

let sections = {
  1: { name: "jobs", tabURL: "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/2" },
  2: {
    name: "education",
    tabURL: "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/3",
  },
  3: {
    name: "projects",
    tabURL: "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/4",
  },
  4: {
    name: "awards",
    tabURL: "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/5",
  },
  5: {
    name: "skills",
    tabURL: "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/6",
  },
};

/* If you change any of the variable names above, 
make sure to update them throughout the document as well! */

$(document).ready(function () {
  /* -------------------------------- section 1 ------------------------------- */
  $.getJSON("https://opensheet.elk.sh/" + sections[1].tabURL, function (data) {
    const containerDiv = $("<div>", {
      id: `${sections[1].name}`,
      class: "container",
    });

    $("#left").append(`<h2>${sections[1].name}</h2>`);
    $("#left").append(containerDiv);

    data.forEach(function (row) {
      if (row.Visibility == "FALSE") {
        return;
      } else {
        $(
          "<div class='content-item'><h3>" +
            row.Organization + // update each of these according to your own column names (e.g. "row.Company"). these are case-sensitive
            "</h3>" +
            "<p class='position'>" +
            row.Position +
            "</p>" +
            "<p class='location-time'>" +
            row.Location +
            "  ⁕  " +
            row.Time +
            "</p>" +
            "<p class='description'>" +
            row.Description +
            "</p></div>"
        ).appendTo(containerDiv);
      }
    });
  });

  /* -------------------------------- section 2 ------------------------------- */
  $.getJSON("https://opensheet.elk.sh/" + sections[2].tabURL, function (data) {
    const containerDiv = $("<div>", {
      id: `${sections[2].name}`,
      class: "container",
    });

    $("#right").append(`<h2>${sections[2].name}</h2>`);
    $("#right").append(containerDiv);

    data.forEach(function (row) {
      if (row.Visibility == "FALSE") {
        return;
      } else {
        $(
          "<div class='content-item'><h3>" +
            row.Institution +
            "</h3>" +
            "<p class='degree'>" +
            row.Degree +
            "</p>" +
            "<p class='location-time'>" +
            row.Location +
            "  ⁕  " +
            row.Time +
            "</p>" +
            "<p class='description'>" +
            row.Description +
            "</p></div>"
        ).appendTo(containerDiv);
      }
    });
  });

  /* -------------------------------- section 3 ------------------------------- */
  $.getJSON("https://opensheet.elk.sh/" + sections[3].tabURL, function (data) {
    const containerDiv = $("<div>", {
      id: `${sections[3].name}`,
      class: "container",
    });

    $("#right").append(`<h2>${sections[3].name}</h2>`);
    $("#right").append(containerDiv);

    data.forEach(function (row) {
      if (row.Visibility == "FALSE") {
        return;
      } else {
        $(
          "<div class='content-item'><h3>" +
            row.Title +
            "</h3>" +
            "<p class='location-time'>" +
            row.Time +
            "</p>" +
            "<p class='description'>" +
            row.Description +
            "</p></div>"
        ).appendTo(containerDiv);
      }
    });
  });

  /* -------------------------------- section 4 ------------------------------- */
  $.getJSON("https://opensheet.elk.sh/" + sections[4].tabURL, function (data) {
    const containerDiv = $("<div>", {
      id: `${sections[4].name}`,
      class: "container",
    });

    $("#right").append(`<h2>${sections[4].name}</h2>`);
    $("#right").append(containerDiv);

    data.forEach(function (row) {
      if (row.Visibility == "FALSE") {
        return;
      } else {
        $(
          "<div class='content-item'><h3>" +
            row.Award +
            "</h3>" +
            "<p class='location-time'>" +
            row.Time +
            "</p>" +
            "<p class='description'>" +
            row.Description +
            "</p></div>"
        ).appendTo(containerDiv);
      }
    });
  });

  /* -------------------------------- section 5 ------------------------------- */
  $.getJSON("https://opensheet.elk.sh/" + sections[5].tabURL, function (data) {
    const containerDiv = $("<div>", {
      id: `${sections[5].name}`,
      class: "container",
    });

    $("#right").append(`<h2>${sections[5].name}</h2>`);
    $("#right").append(containerDiv);

    data.forEach(function (row) {
      if (row.Visibility == "FALSE") {
        return;
      } else {
        $(
          `<div class="${sections[5].name}-item"><p>${row.Skill}</p></div`
        ).appendTo(containerDiv);
      }

      containerDiv.css("margin-top", "1rem");
      $(`.${sections[5].name}-item`).css({
        margin: "0.3rem 0.8rem",
        display: "inline-block",
      });
      $(`.${sections[5].name}-item > p`).css({
        "font-size": "0.8rem",
      });
    });
  });
});
