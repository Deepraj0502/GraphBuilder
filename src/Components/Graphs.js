import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Graphs.css";
import Select from "react-select";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { useEffect } from "react";

export default function Graphs() {
  const [scrollableModal, setScrollableModal] = useState(false);
  const [heatmapX,setHeatmapX] = useState();
  const [heatmapY,setHeatmapY] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const navigateToHeatmap = (y,x) => {
    navigate("/heatmap", {
      state: {
        data: location.state.data,
        heatmapX: x,
        heatmapY: y
      },
    });
  };
  const data = location.state.data[0];
  const options = [];
  useEffect(() => {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      options.push({value:index,label:element})
    }
  });
  return (
    <div className="graphs-outer-div"><MDBModal
    show={scrollableModal}
    setShow={setScrollableModal}
    tabIndex="-1"
  >
    {/* Single COlour Heatmap */}
    <MDBModalDialog scrollable>
      <MDBModalContent>
        <MDBModalHeader>
          <MDBModalTitle>
            Single Colour Heatmap
          </MDBModalTitle>
          <MDBBtn
            className="btn-close"
            color="none"
            onClick={() => setScrollableModal(!scrollableModal)}
          ></MDBBtn>
        </MDBModalHeader>
        <MDBModalBody style={{ height: "60vh" }}>
          <label>Column for Vertical Axis</label>
          <Select
            options={options}
            onChange={(selectedOption) => {
              setHeatmapY(selectedOption);
            }}
          />
          <br />
          <label>Column for Horizontal Axis</label>
          <Select
            options={options}
            isMulti
            onChange={(selectedOption) => {
              setHeatmapX(selectedOption);
            }}
          />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn
            color="secondary"
            onClick={() => setScrollableModal(!setScrollableModal)}
          >
            Close
          </MDBBtn>
          <MDBBtn onClick={() => navigateToHeatmap(heatmapY,heatmapX)}>
            Generate Heatmap
          </MDBBtn>
        </MDBModalFooter>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal>
      <h1 className="graphs-header">GraphBuilder.io</h1>
      <h3 className="graphs-subheader">Select Graph</h3>
      <div className="graphs-outer">
        <div
          className="graphs-options"
          onClick={() => setScrollableModal(!scrollableModal)}
        >
          <img
            src="https://ik.imagekit.io/ok2wgebfs/heatmap_WdjOu0qA2?updatedAt=1686995507777"
            alt=""
            className="graphs-image"
          />
          <h1 className="graphs-name">Heatmap</h1>
        </div>
      </div>
    </div>
  );
}
