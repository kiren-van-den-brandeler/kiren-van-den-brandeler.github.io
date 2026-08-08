---
title: "Behavioral Neuroscience Operant Conditioning Chambers"
description: "Automated testing chambers for behavioral neuroscience research, built with Arduino, CAD, and CNC manufacturing."
category: "work"
discipline:
- "plc-robotics"
- "engineering"
- "industrial-design"
featured: true
featuredOrder: 3
coverImage: "/assets/ratlab/exploded1.gif"
date: 2021-11-01
---

# Behavioral Neuroscience Operant Conditioning Chambers

**Location:** Epigenes Laboratory, La Trobe University (Bundoora, Victoria)  
**Timeline:** 2021  
**Key Focus:** Parametric CAD, Embedded Arduino Logic, CNC Manufacturing, & Bio-Hygiene Design

## Project Overview

This project involved designing, programming, and manufacturing highly specialized operant conditioning testing chambers for behavioral neuroscience research involving lab rats. The apparatus required precise mechanical design to ensure compatibility with local automated manufacturing, integrated sensor logic for precise event monitoring, and absolute adherence to strict biological safety and laboratory hygiene protocols.

## Visual Documentation

The following figures capture the main design iterations, enclosure concepts, control hardware, and laboratory deployment context that shaped the final chamber system.

![Early chamber box assembly overview](/assets/ratlab/box%201-2.gif)
<figcaption><small><strong>Prototype Box Layout:</strong> Early chamber box assembly views showing the initial enclosure geometry and access strategy.</small></figcaption>

![Secondary chamber box assembly view](/assets/ratlab/box%203-4.gif)
<figcaption><small><strong>Integrated Enclosure Development:</strong> Follow-on box assembly views showing refinement of panel spacing and component mounting zones.</small></figcaption>

![Additional chamber box assembly detail](/assets/ratlab/box%205.gif)
<figcaption><small><strong>Component Arrangement Study:</strong> Additional box layout reference used to balance internal hardware placement with service access.</small></figcaption>

![Control modules for the Arduino-based automation system](/assets/ratlab/control-modules.png)
<figcaption><small><strong>Control Hardware Module:</strong> Custom Arduino-based control modules and interface hardware prepared for experimental event logic.</small></figcaption>

![Exploded assembly animation of the chamber structure](/assets/ratlab/exploded1.gif)
<figcaption><small><strong>Exploded Assembly Overview:</strong> Animated CAD sequence showing core structural panels, modular inserts, and assembly sequence.</small></figcaption>

![Secondary exploded assembly view](/assets/ratlab/exploded2.gif)
<figcaption><small><strong>Disassembly and Maintenance Focus:</strong> Secondary exploded view highlighting panel separation and hardware access for lab servicing.</small></figcaption>

![Long enclosure configuration reference](/assets/ratlab/long-enclosures.png)
<figcaption><small><strong>Long-Form Enclosure Variant:</strong> Reference image of the extended enclosure configuration designed for larger test layouts.</small></figcaption>

![Testing laboratory setup](/assets/ratlab/testing-lab.png)
<figcaption><small><strong>Laboratory Deployment Context:</strong> Testing environment reference showing the chamber in relation to staff workflows and experimental setup.</small></figcaption>

![Water chamber integration reference](/assets/ratlab/water-chambers.png)
<figcaption><small><strong>Water Chamber Interface Study:</strong> Conceptual reference showing the chamber interface relationship with water-based experimental modules.</small></figcaption>

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
