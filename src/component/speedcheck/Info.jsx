import React from "react";

const Info = (props) => {
  return (
    <div className="card text-center border border-info">
      <div className="card-header">
        <h3>Yazma Hızı Testi</h3>
      </div>
      <div className="card-body">
        <p>Alttaki metni kutucuğa girerken süre başlar.</p>
        <p>Testi bitirmek için 'ctrl' + 'Enter' yapın.</p>
        <p>Ayrıca sınırını aşmayınız test otomatik sona erer.</p>
      </div>
      <div className="card-footer">{props.challenge}</div>
    </div>
  );
};

export default Info;
