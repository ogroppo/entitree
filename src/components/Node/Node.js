import React, { useState } from "react";
import {
  IMAGE_SIZE,
  CARD_WIDTH,
  CARD_PADDING,
  CARD_CONTENT_WIDTH,
  CARD_HEIGHT,
  CARD_VERTICAL_GAP,
} from "../../constants/tree";
import { Button } from "react-bootstrap";
import {
  FiChevronLeft,
  FiChevronUp,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";
import { RiGroupLine, RiParentLine } from "react-icons/ri";
import { GiBigDiamondRing } from "react-icons/gi";
import { BsImage } from "react-icons/bs";
import { MdChildCare } from "react-icons/md";
import "./Node.scss";
import { CHILD_ID } from "../../constants/properties";
import DetailsModal from "../../modals/DetailsModal/DetailsModal";

export default function Node({
  node,
  currentProp,
  toggleParents,
  toggleChildren,
  toggleSiblings,
  toggleSpouses,
  setFocusedNode,
  focusedNode,
  debug,
}) {
  if (debug) console.log(node);

  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  const {
    data: { thumbnails, gender },
  } = node;

  return (
    <div
      style={{
        left: node.x,
        top: node.y,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        padding: CARD_PADDING,
      }}
      className={`Node ${
        focusedNode && focusedNode.treeId === node.treeId ? "focused" : ""
      } ${gender ? gender : ""}`}
      onClick={() => setFocusedNode(node)}
    >
      <div
        className="imgWrapper"
        style={{ height: IMAGE_SIZE, width: IMAGE_SIZE }}
        onClick={() => setShowModal(true)}
      >
        {!thumbnails || !thumbnails.length ? (
          <span className="defaultImgMessage">
            <BsImage />
          </span>
        ) : (
          <>
            {thumbnails[0] && (
              <img
                alt={thumbnails[0].alt}
                src={thumbnails[0].url}
                title={thumbnails[0].alt}
              />
            )}
            {/* {thumbnails && thumbnails.length > 1 && (
              <span className="imgMore">+{thumbnails.length - 1}</span>
            )} */}
          </>
        )}
      </div>
      <div
        className="content"
        style={{ height: IMAGE_SIZE, width: CARD_CONTENT_WIDTH }}
      >
        <div className="four-line-clamp">
          {node.isRoot ? (
            <h1
              className="label btn btn-link"
              role="button"
              tabIndex="0"
              onClick={() => setShowModal(true)}
              title={node.data.label ? `Show ${node.data.label} details` : null}
            >
              {node.data.label ? node.data.label : <i>Unlabelled</i>}
            </h1>
          ) : (
            <span
              className="label btn btn-link"
              role="button"
              tabIndex="0"
              onClick={() => setShowModal(true)}
              title={node.data.label ? `Show ${node.data.label} details` : null}
            >
              {node.data.label ? node.data.label : <i>Unlabelled</i>}
            </span>
          )}
          {node.data.description && (
            <>
              <br />
              <span className="description" title={node.data.description}>
                {node.data.description}
              </span>
            </>
          )}
        </div>
        <div className="dates">
          {node.data.lifeSpan
            ? node.data.lifeSpan
            : node.data.startEndSpan
            ? node.data.startEndSpan
            : node.data.inceptionAblishedSpan
            ? node.data.inceptionAblishedSpan
            : ""}
        </div>
        {/*{node.data.externalLinks && !!node.data.externalLinks.length && (*/}
        {/*  <div className="externalLinks">*/}
        {/*    {node.data.externalLinks.map((link, index) => (*/}
        {/*      <a*/}
        {/*        key={node.treeId + index}*/}
        {/*        target="_blank"*/}
        {/*        title={link.title}*/}
        {/*        href={link.url}*/}
        {/*      >*/}
        {/*        <img src={link.iconSrc} alt={link.alt} title={link.alt} />*/}
        {/*      </a>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
      {node._parentsExpanded && currentProp && (
        <div className="upPropLabel" style={{ top: -CARD_VERTICAL_GAP / 2 }}>
          <span>{currentProp.label}</span>
        </div>
      )}
      {node._childrenExpanded && currentProp && (
        <div
          className="downPropLabel"
          style={{ bottom: -CARD_VERTICAL_GAP / 2 }}
        >
          <span>{currentProp.label}</span>
        </div>
      )}
      <SiblingCounter
        ids={node.data.leftIds}
        node={node}
        toggleFn={toggleSiblings}
        className="siblingCount"
        currentProp={currentProp}
      />
      <SpouseCounter
        ids={node.data.rightIds}
        node={node}
        toggleFn={toggleSpouses}
        className="spouseCount"
        currentProp={currentProp}
      />
      <ParentCounter
        ids={node.data.upIds}
        node={node}
        toggleFn={toggleParents}
        className="parentCount"
        currentProp={currentProp}
      />
      <ChildCounter
        ids={node.data.downIds}
        node={node}
        toggleFn={toggleChildren}
        className="childrenCount"
        currentProp={currentProp}
      />
      {showModal && <DetailsModal hideModal={hideModal} node={node} />}
    </div>
  );
}

function SiblingCounter({ ids, node, toggleFn, className, currentProp }) {
  const [disabled, setDisabled] = React.useState(false);
  if (!ids || !ids.length) return null;
  return (
    <Button
      className={`${className} counter`}
      variant={"link"}
      disabled={disabled}
      onClick={async () => {
        setDisabled(true);
        await toggleFn(node);
        setDisabled(false);
      }}
    >
      <div>
        <div>{ids.length}</div>
        <div className="chevron mt-1 mb-1">
          {node._siblingsExpanded ? <FiChevronRight /> : <FiChevronLeft />}
        </div>
        <div>
          <RiGroupLine />
        </div>
      </div>
    </Button>
  );
}

function ParentCounter({ ids, node, toggleFn, className, currentProp }) {
  const [disabled, setDisabled] = React.useState(false);
  if (!ids || !ids.length) return null;
  return (
    <Button
      className={`${className} counter`}
      variant={"link"}
      disabled={disabled}
      onClick={async () => {
        setDisabled(true);
        await toggleFn(node);
        setDisabled(false);
      }}
    >
      <span className="value">{ids.length}</span>
      <span className="chevron ml-1 mr-1">
        {node._parentsExpanded ? <FiChevronDown /> : <FiChevronUp />}
      </span>
      {currentProp && currentProp.id === CHILD_ID && (
        <span>
          <RiParentLine />
        </span>
      )}
    </Button>
  );
}

function SpouseCounter({ ids, node, toggleFn, className, currentProp }) {
  const [disabled, setDisabled] = React.useState(false);
  if (!ids || !ids.length) return null;
  return (
    <Button
      className={`${className} counter`}
      variant={"link"}
      disabled={disabled}
      onClick={async () => {
        setDisabled(true);
        await toggleFn(node);
        setDisabled(false);
      }}
      title={(node._spousesExpanded ? "Collapse" : "Expand") + " spouses"}
    >
      <div>{ids.length}</div>
      <div className="chevron mt-1 mb-1">
        {node._spousesExpanded ? <FiChevronLeft /> : <FiChevronRight />}
      </div>
      <div>
        <GiBigDiamondRing />
      </div>
    </Button>
  );
}

function ChildCounter({ ids, node, toggleFn, className, currentProp }) {
  const [disabled, setDisabled] = React.useState(false);
  if (!ids || !ids.length) return null;
  return (
    <Button
      className={`${className} counter`}
      variant={"link"}
      disabled={disabled}
      onClick={async () => {
        setDisabled(true);
        await toggleFn(node);
        setDisabled(false);
      }}
    >
      <span className="value">{ids.length}</span>
      <span className="chevron ml-1 mr-1">
        {node._childrenExpanded ? <FiChevronUp /> : <FiChevronDown />}
      </span>
      {currentProp && currentProp.id === CHILD_ID && (
        <span>
          <MdChildCare />
        </span>
      )}
    </Button>
  );
}
