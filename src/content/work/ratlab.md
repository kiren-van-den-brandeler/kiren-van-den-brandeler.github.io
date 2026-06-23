---
title: "Behavioral Neuroscience Operant Conditioning Chambers"
publishDate: 2021-11-01 00:00:00
img: ""
img_alt: ""
description: "An automated testing chamber designed for rat behavioral experiments, featuring OpenSCAD modeling, CNC manufacturing, and Arduino logic control."
tags:
  - CAD Design (OpenSCAD)
  - Mechatronics
  - Arduino
  - CNC Manufacturing
---

<div class="project-details">
    <p><strong>Location:</strong> Epigenes Laboratory, La Trobe University (Bundoora, Victoria)</p>
    <p><strong>Timeline:</strong> 2021</p>
</div>

## Project Overview
This project involved designing, programming, and manufacturing highly specialized operant conditioning testing chambers for behavioral neuroscience research involving lab rats. The apparatus required precise mechanical design to ensure compatibility with local automated manufacturing, integrated sensor logic for precise event monitoring, and absolute adherence to strict biological safety and laboratory hygiene protocols.

---

## 1. 3D Modeling & Exploded Assemblies (CAD Design)
The structural components of the chambers were fully designed using code-driven CAD in **OpenSCAD**. OpenSCAD was selected to allow parametric changes as chamber iterations shifted based on feedback from the laboratory staff. 

The animation below shows the sequential construction steps and the exploded view of the core behavioral test unit, showing how components dynamically interlocked during manual final assembly.

<div class="gif-container">
    <img src="/assets/ratlab/exploded1.gif" alt="Exploded view animation of the testing apparatus" />
    <p><em>Figure 1: Upper structural assembly and interlocking panel mechanics.</em></p>
</div>

---

## 2. Prototyping Iterations & Structural Configurations
Development required continuous prototyping loops. Testing configurations went through multiple physical and spatial adjustments to ensure reliable subject separation, secure latching, and optimal sensor alignment. 

The following sequences demonstrate the different variations (Boxes 1 through 5) built to accommodate different time-based and condition-based experiment layouts:

<div class="gif-container">
    <img src="/assets/ratlab/box 1-2.gif" alt="Chamber layout iterations 1 and 2" />
    <p><em>Figure 2: Initial structural frames (Box 1-2) optimizing base dimensions.</em></p>
</div>

<div class="gif-container">
    <img src="/assets/ratlab/box 3-4.gif" alt="Chamber layout iterations 3 and 4" />
    <p><em>Figure 3: Intermediate variations (Box 3-4) showing altered sensor configurations.</em></p>
</div>

<div class="gif-container">
    <img src="/assets/ratlab/box 5.gif" alt="Final configuration layout Box 5" />
    <p><em>Figure 4: Optimized setup (Box 5) built for integrated behavioral testing protocols.</em></p>
</div>

<div class="gif-container">
    <img src="/assets/ratlab/long-enclosures.png" alt="Elongated experimental testing tracks installed at La Trobe University" />
    <p><em>Figure 5: High-aspect-ratio long variant enclosures deployed in parallel for directional behavioral tracking.</em></p>
</div>

---

## 3. Automation, Electronics, and Arduino Logic
To capture experimental metrics, the system utilized an **Arduino-based control framework**. I developed state-machine firmware using time-based tracking loops and condition-based input triggers:
* **Condition-Based Inputs:** Infra-red beams and physical switches recorded precise lever presses or head entries.
* **Time-Based Stimuli:** Regulated visual/auditory signals and dispensing mechanisms operated on precise millisecond delays to match experimental parameters.

<div class="gif-container">
    <img src="/assets/ratlab/control-modules.png" alt="Handbuilt customized Arduino control and timer remote modules" />
    <p><em>Figure 6: Custom 3D-printed controller enclosures housing the Arduino components, complete with integrated LCD data displays, tactile timer buttons, and master reset triggers.</em></p>
</div>

---

## 4. CNC Manufacturing & Supplier Coordination
A crucial phase of this project was bridging the gap between design and production. I acted as the primary technical point of contact with our CNC manufacturing partner. This required:
* Compiling and converting OpenSCAD code structures into strict DXF/STEP vendor-compatible vector profiles.
* Designing with a strict understanding of machine tolerances, tool radiuses, and sheet-nesting efficiencies to reduce waste and lower production costs.

---

## 5. Lab Constraints, Testing, & Final Handover
Because these assemblies were deployed directly into live behavioral neuroscience labs with rats, the selection of materials and physical layout had to conform to strict biological regulations.

<div class="gif-container">
    <img src="/assets/ratlab/testing-lab.png" alt="Kiren testing the hardware and firmware connections in sterile lab gear" />
    <p><em>Figure 7: Final deployment, terminal software debugging, and calibration at La Trobe University before handing the testing systems over to the lab scientists.</em></p>
</div>

* **Sanitation:** All structural sheet panels were drafted for rapid tear-down without complex tools, allowing thorough cleaning to prevent chemical contamination or animal scent tracing between test runs.
* **Safety:** Zero sharp edges or exposed wiring profiles were permitted within the interior radius, eliminating any physical risk to the test subjects or handlers.
* **Waterproofing & Fluid Management:** Some enclosures were designed to hold water to a exact heights for specific swim objectives. This required precision tolerance sealing along acrylic sheet edges and custom plumbing routes.

<div class="gif-container">
    <img src="/assets/ratlab/water-chambers.png" alt="Deep gloss water-retaining chambers with fluid routing systems" />
    <p><em>Figure 8: Waterproof testing of high-walled black acrylic chambers featuring drainage manifolds, overhead delivery plates, and integrated sensory mounts.</em></p>
</div>