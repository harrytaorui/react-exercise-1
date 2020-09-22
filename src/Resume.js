import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <section className="resume">
        <About />
        <Education />
      </section>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div className="about">
        <h3>ABOUT ME</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          non, dolorem, cumque distinctio magni quam expedita velit laborum sunt
          amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum!
          Quasi.
        </p>
      </div>
    );
  }
}

class Education extends Component {
  render() {
    return (
      <div className="education">
        <h3>EDUCATION</h3>
        <Year />
        <Experience />
      </div>
    );
  }
}

class Year extends Component {
  render() {
    return (
      <ul className="years">
        <li>
          <h4>1990</h4>
        </li>
        <li>
          <h4>2005</h4>
        </li>
        <li>
          <h4>2009</h4>
        </li>
        <li>
          <h4>2012</h4>
        </li>
      </ul>
    );
  }
}

class Experience extends Component {
  render() {
    return (
      <ul className="experience">
        <li>
          <h4>I was born in Katowice</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            exercitationem, totam, dolores iste dolore est aut modi.
          </p>
        </li>
        <li>
          <h4>Secondary school specializing in artistic</h4>
          <p>
            {' '}
            Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum
            ducimus quibusdam quis voluptatibus.
          </p>
        </li>
        <li>
          <h4>First level graduation in Graphic Design</h4>
          <p>
            {' '}
            Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus
            quaerat quibusdam perferendis? lusto, quibusdam asperiores unde
            repellat
          </p>
        </li>
        <li>
          <h4>Second level graduation in Graphic Design</h4>
          <p> Ducimus, aliquam tempore autem itaque et accusantium!</p>
        </li>
      </ul>
    );
  }
}

export default Resume;
