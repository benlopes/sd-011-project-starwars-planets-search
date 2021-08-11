import React, { useContext } from 'react';
import AppContext from './AppContext';

export default function Table() {
  const { data, filters } = useContext(AppContext);
  const { filterByName, filterByNumericValues } = filters;

  if (!data) {
    return null;
  }

  let filteredData = data;

  if (filterByName.name) {
    filteredData = filteredData.filter((planet) => {
      const lowerCasePlanetName = planet.name.toLowerCase();
      return lowerCasePlanetName.includes(filterByName.name.toLowerCase());
    });
  }

  filterByNumericValues.forEach(({ comparison, column, value }) => {
    filteredData = filteredData.filter((planet) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > value;
      }

      if (comparison === 'menor que') {
        return Number(planet[column]) < value;
      }

      return Number(planet[column]) === value;
    });
  });

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}