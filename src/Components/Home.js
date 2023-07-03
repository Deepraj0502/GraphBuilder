import React, { useState } from "react";
import Papa from "papaparse";
import { FileUploader } from "react-drag-drop-files";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

import "./Home.css";
let file = null;
export default function Home() {
  const [scrollableModal, setScrollableModal] = useState(false);
  const navigate = useNavigate();
  const navigateToGraphs = (data) => {
    navigate("/graphs", {
      state: {
        data: data
      },
    });
  };
  const [value, setValue] = React.useState(0);
  const [display, setDisplay] = React.useState("hidden");

  const handleChange = (files) => {
    file = files;
    setText(file["name"]);
    setValue(100);
    setDisplay("visible");
  };
  const [text, setText] = useState("Drop or Click to Upload Your File");

  const importCSV = () => {
    if (file === null) {
      alert("No File Uploaded");
      return;
    }
    Papa.parse(file, {
      delimiter: "",
      chunkSize: 3,
      header: false,
      complete: function (responses) {
        navigateToGraphs(responses['data']);
      },
    });
  };
  const fileTypes = ["CSV"];
  return (
    <div className="home-outer-div">
      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
          <MDBModalDialog scrollable>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Steps to get CSV file from Google Forms</MDBModalTitle>
                <MDBBtn
                  className='btn-close'
                  color='none'
                  onClick={() => setScrollableModal(!scrollableModal)}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                  augue laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                  augue laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                  augue laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                  augue laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                  augue laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                  augue laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn onClick={() => setScrollableModal(!setScrollableModal)}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      <h1 className="home-header">GraphBuilder.io</h1>
      <br />
      <h3 className="home-subheader">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </h3>
      <div className="home-upload-div">
        <h2>Upload CSV File</h2>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <div className="home-upload-text-div">
          <p className="home-upload-text">{text}</p>
          <div className="progress-div" style={{ visibility: display }}>
          <div style={{ width: value + "%" }} className="progress" id="progress" />
        </div>
        </div>
        <button onClick={importCSV} className="home-submit">
          Generate Graph
        </button>
        <p className="home-subtext" onClick={() => setScrollableModal(!scrollableModal)}>How To Get CSV File from Google Forms?</p>
      </div>
    </div>
  );
}
