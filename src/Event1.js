import React from 'react';

export default class Event1 extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h4>{this.props.date}</h4>
        <p>
          Ich hoffe, dass sie sich herauslocken lässt, die Frühlingssonne. Auf
          jeden Fall wird es eine Wanderung durch eine sehr schöne und
          abwechslungsreiche Landschaft werden.
        </p>
        <p>
          <strong>
            Jeder besorgt sich bitte selbst seine Fahrkarte für den Tarifbereich
            Berlin C.
          </strong>
        </p>
        <p>
          Treffpunkt ist um
          <strong>
            &nbsp;10:30 Uhr im Bahnhof Gesundbrunnen auf dem Bahnsteig an Gleis
            9&nbsp;
          </strong>
          in der Nähe des Fahrkartenautomaten. Von dort fahren wir um 10:39 Uhr
          mit Bahn und Bus nach Rüdnitz.
        </p>
        <p>
          Die Wanderstrecke beträgt <strong>ca. 16 km</strong> und endet wieder
          am Ausgangspunkt.
        </p>
        <p>Von Rüdnitz gibt es stündlich Anschlüsse nach Berlin.</p>
        <p>
          Meine Telefonnummer:<strong>&nbsp;01573 8091368</strong>. Bitte kurz
          vor dem Termin an dieser Stelle auf aktuelle Änderungen achten!
        </p>
      </div>
    );
  }
}
