import React, { Component } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

class Pdf extends Component {

  createPdf() {
    var doc = new jsPDF();

    doc.setFont('times new roman');
    doc.text('Confirmation Letter to Physicians and Medical Center', 105, 10, { align: 'center' });

    doc.setFontSize(12)
    doc.text("27-02-2019", 10, 20);

    doc.text("Sami Services Inc.", 10, 30);
    doc.text("4320 Stevens Creek Blvd; Suit120", 10, 36);
    doc.text("San Jose, CA 95129", 10, 42);

    doc.autoTable({   
      head: [['Service Name', 'CPT Code', 'Speciality', 'Service Prices', 'Other fees', 'Cost to Customer']],
      body: [
        ['David', 'test', 'test', 'test', 'test', 'test'],
        ['Castille', 'test', 'test', 'test', 'test', 'test'],
      ],
      margin: [100, 10, 10, 10],
    });
    doc.save('Letter.pdf');
  }

  render() {
    return (
      <button onClick={() => this.createPdf()}> PDF FILE </button>
    );
  }
}

export default Pdf;