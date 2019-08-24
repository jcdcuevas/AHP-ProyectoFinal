import React from 'react';
import { Link } from 'react-router-dom';

class ResultsTable extends React.Component {
  constructor() {
    super();
    this.showRow = this.showRow.bind(this);
  }

  showRow(result) {
    var marks = result.marks;
    var total = marks.english + marks.hindi + marks.mathematics;
    var percentage = total/3;
    var color = percentage < 50 ? 'red' : '';
    return(
      <tr style={{backgroundColor: color}}>
        
        <td>
          <Link to={{ pathname: '/result', params: { result: result } }} >
            {result.matricula}
          </Link>
        </td>
        <td>{result.firstName}</td>
        <td>{result.lastName}</td>
        <td>{percentage}</td>
      </tr>
    )
  }

  render() {
    return(
      <table className='listing'>
        <thead>
        <tr>
          <th colSpan="4">PLATAFORMA DE HISTORIAL ACADÉMICO</th>
        </tr>
        <tr>
          <th colSpan="4">CEA 03 "EL TULE"</th>
        </tr>
          <tr>
            <th colSpan="4">CUATRIMESTRE C02/2019 (PRIMER SEMESTRE)</th>
          </tr>
          <tr>
            <th>Matricula</th>
            <th>Nombre(s)</th>
            <th>Apellidos</th>
            <th>Promedio General</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.results.map((result) => {
              return this.showRow(result)
            })
          }
        </tbody>
      </table>
    )
  }
}

export default ResultsTable;
