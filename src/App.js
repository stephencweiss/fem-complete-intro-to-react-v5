const Pet = ({name, animal, breed}) =>
   React.createElement("div", {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ])

const App = () => React.createElement(
  "div",
  { id: 'main-div' },

  [ React.createElement('h1', {},"Adopt Me!"),
  React.createElement(Pet, {name: "Finn", animal: "Dog", breed: "Pit-Mix"}),
  React.createElement(Pet, {name: "Rolex", animal: "Dog", breed: "Golden"}),
  React.createElement(Pet, {name: "Bruno", animal: "Dog", breed: "St. Bernard"}),]

)

ReactDOM.render(React.createElement(App), document.getElementById('root'))