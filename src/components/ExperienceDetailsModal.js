const React = require("react");

const ExperienceDetailsModal = ({ darkTheme, experienceDetails }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    React.createElement(React.Fragment, null, 
      React.createElement("div", {className: "modal fade bg-dark-1", id: "expModal", tabIndex: -2, "aria-labelledby": "exampleModalLabel", "aria-hidden": true}, 
        React.createElement("div", {className: "modal-dialog modal-xl"}, 
          React.createElement("div", {className: "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")}, 
            React.createElement("div", {className: "modal-body"}, 
              React.createElement("button", {type: "button", className: "btn-close " + (darkTheme ? "btn-close-white" : ""), "data-bs-dismiss": "modal", "aria-label": "Close"}), 
              React.createElement("div", {className: "container ajax-container " + (darkTheme ? "bg-dark-2 text-light" : "")}, 
                React.createElement("h2", {className: "text-6 font-weight-600 text-center mb-4" + (darkTheme ? " text-white" : "")}, 
                  experienceDetails ? experienceDetails.title : null
                ), 
                React.createElement("div", {className: "row g-4"}, 
                  React.createElement("div", {className: "col-md-5"}, 
                    React.createElement("h4", {className: "text-4 font-weight-600" + (darkTheme ? " text-white" : "")}, 
                      "experience Info:"
                    ), 
                    React.createElement("p", null, experienceDetails ? experienceDetails.desc : null), 
                    React.createElement("h4", {className: "text-4 font-weight-600 mt-4" + (darkTheme ? " text-white" : "")}, 
                      "experience Details:"
                    ), 
                    React.createElement("ul", {className: "list-style-2 " + (darkTheme ? "list-style-light" : "")}, 
                      React.createElement("li", null, 
                        React.createElement("span", {className: "text-dark font-weight-600 me-2" + (darkTheme ? " text-white" : "")}, 
                          "Client:"
                        ), 
                        experienceDetails ? experienceDetails.place : null
                      ), 
                      React.createElement("li", null, 
                        React.createElement("span", {className: "text-dark font-weight-600 me-2" + (darkTheme ? " text-white" : "")}, 
                          "Technologies:"
                        ), 
                        experienceDetails ? experienceDetails.yearRange : null
                      ), 
                      React.createElement("li", null, 
                        React.createElement("span", {className: "text-dark font-weight-600 me-2" + (darkTheme ? " text-white" : "")}, 
                          "Industry:"
                        ), 
                        experienceDetails ? experienceDetails.place : null
                      ), 
                      React.createElement("li", null, 
                        React.createElement("span", {className: "text-dark font-weight-600 me-2" + (darkTheme ? " text-white" : "")}, 
                          "Date:"
                        ), 
                        experienceDetails ? experienceDetails.place : null
                      ), 
                      React.createElement("li", null, 
                        React.createElement("span", {className: "text-dark font-weight-600 me-2" + (darkTheme ? " text-white" : "")}, 
                          "URL:"
                        ), 
                        React.createElement("a", {href: experienceDetails ? experienceDetails.yearRange : null, target: "_blank", rel: "noopener noreferrer"}, 
                          experienceDetails ? experienceDetails.yearRange : null
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

module.exports = ExperienceDetailsModal;