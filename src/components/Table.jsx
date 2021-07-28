import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { planets, filters: { filterByName: { name } } } = useContext(MyContext);
  const dataPlanets = name ? planets.filter((planet) => planet.name.includes(name)) : planets;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>

      <tbody>
        { dataPlanets.map(({ name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate, gravity, terrain, population,
          surface_water: surfaceWater, films,
          created, edited, url }, index) => (
          <tr key={ index }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
