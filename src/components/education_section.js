import React from 'react';
import SectionForm from './section-form.js';
import DateField from './date_field.js';
import FieldInput from './field-input.js';

class EducationSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // Add 'add another school button', one option by default
        console.log("EDUCATION", this.props.fields)
        const {sections} = this.props.fields
        return(
            <div className="section">
              {/* <h1>{this.props.sectionTitle.charAt(0).toUpperCase() + this.props.sectionTitle.slice(1)}</h1>

              <FieldInput fieldTitle={this.props.fields} />
              <button className="btn">Submit</button> */}

              {this.props.fields.map(
                  function fieldIterator(field, i) {
                      if(field === 'Dates Attended' || field === "Dates Employed") {
                          return <DateField fieldTitle={field} />
                      }
                      return <FieldInput fieldTitle={field} />
                  }
              )}
              <div className="btnDiv">
                <button className="btn">Add Another</button>
              </div>
              <button className="btn">Submit</button>
            </div>
        )
    }
}

export default EducationSection

