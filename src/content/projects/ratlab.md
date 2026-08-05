---
title: "Behavioral Neuroscience Operant Conditioning Chambers"
description: "Automated testing chambers for behavioral neuroscience research, built with Arduino, CAD, and CNC manufacturing."
category: "work"
discipline:
- "plc-robotics"
- "engineering"
- "industrial-design"
coverImage: "/assets/ratlab/exploded1.gif"
date: 2021-11-01
---

# Behavioral Neuroscience Operant Conditioning Chambers

**Location:** Epigenes Laboratory, La Trobe University (Bundoora, Victoria)  
**Timeline:** 2021  
**Key Focus:** Parametric CAD, Embedded Arduino Logic, CNC Manufacturing, & Bio-Hygiene Design

## Project Overview

This project involved designing, programming, and manufacturing highly specialized operant conditioning testing chambers for behavioral neuroscience research involving lab rats. The apparatus required precise mechanical design to ensure compatibility with local automated manufacturing, integrated sensor logic for precise event monitoring, and absolute adherence to strict biological safety and laboratory hygiene protocols.

## 1. 3D Modeling & Exploded Assemblies (CAD Design)

The structural components of the chambers were fully designed using code-driven CAD in **OpenSCAD**. OpenSCAD was selected to allow parametric changes as chamber iterations shifted based on feedback from the laboratory staff.

![Exploded assembly animation showing sequential construction steps of the core behavioral test unit](/assets/ratlab/exploded1.gif)
* **Exploded Assembly Architecture:** Animated CAD sequence demonstrating the interlocking structural panels, modular wall inserts, and quick-disassembly hardware for lab maintenance. *

## 2. Modular Enclosure Systems

To support multiple behavioral testing protocols, the enclosure framework was engineered to be highly modular. Interchangeable wall panels allow researchers to swap out stimulus modules (e.g., lever assemblies, nose-poke ports, liquid dispensers) without rebuilding the main chassis.

![Multiple variant enclosures deployed in parallel for behavioral tracking](/assets/ratlab/enclosure-variants.png)
* **Enclosure Configurations:** Two variant enclosures deployed in parallel for directional behavioral tracking and multi-animal testing protocols. *

## 3. Automation, Electronics, and Arduino Logic

To capture experimental metrics, the system utilized an **Arduino-based control framework**. Custom state-machine firmware was developed using time-based tracking loops and condition-based input triggers:

* **Condition-Based Inputs:** Infrared beams and physical switches recorded precise lever presses or head entries.
* **Time-Based Stimuli:** Regulated visual/auditory signals and dispensing mechanisms operated on precise millisecond delays to match experimental parameters.

![Custom 3D-printed controller enclosures housing Arduino components](/assets/ratlab/control-modules.png)
* **Hardware Control Modules:** Handbuilt customized Arduino control and timer remote modules complete with integrated LCD data displays, tactile timer buttons, and master reset triggers. *

## 4. CNC Manufacturing & Supplier Coordination

A crucial phase of this project was bridging the gap between design and production. Serving as the primary technical point of contact with the CNC manufacturing partner required:

* Compiling and converting OpenSCAD code structures into strict DXF/STEP vendor-compatible vector profiles.
* Designing with a strict understanding of machine tolerances, tool radiuses, and sheet-nesting efficiencies to reduce material waste and lower production costs.
