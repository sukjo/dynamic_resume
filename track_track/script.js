/* Replace the string of characters in the global variables below with the 
share link to your Google Spreadsheet.

Grab only the characters between "https://docs.google.com/spreadsheets/d/" 
and  "/edit?usp=sharing" in the URL. 

Then add "/1", "/2", etc. to point to a specific tab in the spreadsheet. 
These indexes are 1-based and determined automatically. */

let sections = {
  1: {
    name: "experience",
    tabURL: "194UPVhMNitO4epJYmN_z_FSntCDGL1B8KbSqph9X1ig/2",
  },
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
  $.getJSON("https://opensheet.elk.sh/" + sections[1].tabURL)
    .done(function (data_1) {
      const containerDiv = $("<div>", {
        id: `${sections[1].name}`,
        class: "sub-container",
      });

      $("#left").append(`<h2>${sections[1].name}</h2>`);
      $("#left").append(containerDiv);

      data_1.forEach(function (row) {
        if (row.Visibility == "FALSE") {
          return;
        } else {
          $(
            "<div class='item'><h3>" +
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
    })
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[2].tabURL);
    })
    .done(
      /* -------------------------------- section 2 ------------------------------- */
      function (data_2) {
        const containerDiv = $("<div>", {
          id: `${sections[2].name}`,
          class: "sub-container",
        });

        $("#right").append(`<h2>${sections[2].name}</h2>`);
        $("#right").append(containerDiv);

        data_2.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            $(
              "<div class='item'><h3>" +
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
      }
    )
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[3].tabURL);
    })
    .done(
      /* -------------------------------- section 3 ------------------------------- */
      function (data_3) {
        const containerDiv = $("<div>", {
          id: `${sections[3].name}`,
          class: "sub-container",
        });

        $("#right").append(`<h2>${sections[3].name}</h2>`);
        $("#right").append(containerDiv);

        data_3.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            $(
              "<div class='item'><h3>" +
                row.Projects +
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
      }
    )
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[4].tabURL);
    })
    .done(
      /* -------------------------------- section 4 ------------------------------- */
      function (data_4) {
        const containerDiv = $("<div>", {
          id: `${sections[4].name}`,
          class: "sub-container",
        });

        $("#right").append(`<h2>${sections[4].name}</h2>`);
        $("#right").append(containerDiv);

        data_4.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            $(
              "<div class='item'><h3>" +
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
      }
    )
    .then(function () {
      return $.getJSON("https://opensheet.elk.sh/" + sections[5].tabURL);
    })
    .done(
      /* -------------------------------- section 5 ------------------------------- */
      function (data_5) {
        const containerDiv = $("<div>", {
          id: `${sections[5].name}`,
          class: "sub-container",
        });

        $("#right").append(`<h2>${sections[5].name}</h2>`);
        $("#right").append(containerDiv);

        data_5.forEach(function (row) {
          if (row.Visibility == "FALSE") {
            return;
          } else {
            $(
              `<div class="${sections[5].name}-item"><p>${row.Skill}</p></div`
            ).appendTo(containerDiv);
          }

          containerDiv.css("margin", "1rem 0");
          $(`.${sections[5].name}-item`).css({
            margin: "0.3rem 0.8rem",
            display: "inline-block",
          });
          $(`.${sections[5].name}-item > p`).css({
            "font-size": "0.8rem",
          });
        });
      }
    );
});
