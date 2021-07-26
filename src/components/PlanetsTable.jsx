import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { data, name } = useContext(PlanetsContext);

  return (
    (data.results)
      ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Período de Rotação</th>
              <th>Período Orbital</th>
              <th>Diâmetro</th>
              <th>Clima</th>
              <th>Gravidade</th>
              <th>Terreno</th>
              <th>Água de Superfície</th>
              <th>População</th>
              <th>Filmes</th>
              <th>Criado</th>
              <th>Editado</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            { data.results
              .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
              .map((planet, index) => (
                <tr key={ index }>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.residents }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              ))}
          </tbody>
        </table>
      )
      : (<div>Loading...</div>)
  );
};

export default Table;