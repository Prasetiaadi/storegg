import React from 'react';
import Categori from './Categori';
import TableRow from './TableRow';

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              <Categori icon="icon-desktop" nominal={18500000}>
                Game <br /> Desktop
              </Categori>
              <Categori icon="icon-mobile" nominal={8500000}>
                Game <br /> Mobile
              </Categori>
              <Categori icon="icon-desktop" nominal={5000000}>
                Others <br /> Categories
              </Categori>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  image="overview-1"
                  title="Mobile Legend"
                  categori="Desktop"
                  item={200}
                  price={290000}
                  status="pending"
                />
                <TableRow
                  image="overview-2"
                  title="Call of Duty: Modern"
                  categori="Desktop"
                  item={200}
                  price={790000}
                  status="pending"
                />
                <TableRow
                  image="overview-3"
                  title="Clash of Clans"
                  categori="Mobile"
                  item={200}
                  price={120000}
                  status="failed"
                />
                <TableRow
                  image="overview-4"
                  title="The Royal Game"
                  categori="Mobile"
                  item={225}
                  price={200000}
                  status="success"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
