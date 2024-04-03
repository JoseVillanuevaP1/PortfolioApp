import React from 'react';
import { JoinTitle } from './JoinTitle';
import { JoinButtons } from './JoinButtons';

const JoinView = () => {
  return (
    <section className="w3l-join py-5" id="join">
      <style>
        {`.w3l-join {
          background-image: url(/images/banner1.jpg);
        }`}
      </style>
      <div className="container py-md-5 py-3 AboutPageCover">
        <div className="row">
          <JoinTitle />
          <JoinButtons />
        </div>
      </div>
    </section>
  );
}

export default JoinView;
