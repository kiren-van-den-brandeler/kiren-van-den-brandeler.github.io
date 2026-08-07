---
title: "Weaverbot: Autonomous Mobile 3D Construction Robot"
description: "Design of a semi-autonomous spider-like additive manufacturing robot that deploys off transport, elevates, and 3D prints housing directly under its footprint."
category: "studies"
discipline:
  - "industrial-design"
  - "engineering"
  - "plc-robotics"
featured: true
featuredOrder: 1
coverImage: "/assets/weaverbot/Weaverbot1.png"
date: 2025-10-01
---

# Weaverbot: Autonomous Mobile 3D Construction Robot

**Lead Mechanical & Industrial Design:** Kiren  
**Key Focus:** Chassis Architecture, Wheel-to-Foot Mobility Transition, Structural Elevation, & Site Deployment

---

## 1. Executive Summary & Design Vision

Traditional 3D house-printing systems rely on massive, slow-to-assemble gantry cranes that require extensive site prep. **Weaverbot** reimagines additive construction through a semi-autonomous, highly mobile "spider" platform designed for rapid deployment.

Transported via standard flatbed truck, Weaverbot self-unloads, drives to the designated foundation, transitions from wheels to stabilizing anchors, elevates its central torso, and 3D prints a housing unit directly underneath its body. Once the print cycle is complete, it lowers, converts back to wheeled mobility, and rolls to the next foundation to repeat the process.

![Weaverbot CAD model in perspective view inside Autodesk Inventor](/assets/weaverbot/Weaverbot1.png)
<figcaption><small><strong>Isometric Perspective Assembly:</strong> Perspective CAD view of Weaverbot in Autodesk Inventor, showing the chassis architecture, quadrupedal layout, and 3D-printing payload.</small></figcaption>

---

## 2. Dynamic Deployment & Mobility System

Designed by **Kiren**, the core innovation lies in the dual-mode mobility and leveling chassis that bridges heavy transit with high-precision printing.

![Weaverbot Quadrupedal Leg Layout](/assets/weaverbot/Weaverbot2.png)
<figcaption><small><strong>Static Structural Focus:</strong> Isolated static analysis of a single quadrupedal leg assembly under peak static load conditions for engineering compliance.</small></figcaption>

### Key Mobility & Anchoring Features:
* **Transit-to-Site Mode:** High-torque wheel modules allow the robot to roll off flatbeds and maneuver over raw terrain to the print site.
* **Wheel-to-Foot Transition:** Custom linkage mechanisms tuck the drive wheels out of the load path and engage heavy-duty, broad-surface foot anchors to handle ground settling.
* **Variable Elevation System:** Integrated linear actuators raise the main torso to the target working clearance, creating an elevated operating envelope directly above the foundation.

---

## 3. Structural Chassis & 3D Print Architecture

The central payload houses the multi-axis print head and material feed lines, functioning almost like a biological layer-deposition mechanism operating directly underneath the frame.

![Exploded View with Symmetry Planes](/assets/weaverbot/Weaverbot3.png)
<figcaption><small><strong>Symmetrical Kinematics:</strong> Planes (orange) used to mirror leg geometry. Features an extensible torso concept to stay compact during transit while expanding on-site for stability.</small></figcaption>

### Engineering Focus Areas:
* **Footprint Envelope Optimization:** Maximized the interior printable area under the torso while maintaining transport-friendly exterior dimensions for public roads.
* **Structural Rigidity During Printing:** Designed a high-stiffness frame capable of resisting the dynamic loads of a sweeping concrete extrusion nozzle without transmitting vibration into the wet print layers.
* **Integrated Material Feed & Routing:** Routed heavy slurry hoses and control lines through central pivot points to prevent pinching and hose bind during long print cycles.

![Leg Thigh Segment Highlight](/assets/weaverbot/Weaverbot4.png)
<figcaption><small><strong>Component Hierarchy:</strong> Highlighting upper leg segment (<code>LEG_Thigh_1</code>). Utilizes heavy-machinery actuation principles to manage high dynamic loads.</small></figcaption>

---

## 4. FEA & Load-Bearing Structural Optimization

Because the chassis supports heavy overhang loads while elevated, comprehensive finite element analysis (FEA) was performed by Kiren to verify frame stability and deflection limits.

![Displacement Stress Analysis](/assets/weaverbot/WeaverbotDisplacementStressAnalysis.png)
<figcaption><small><strong>Deflection Analysis:</strong> Four-leg simulation proving tipping prevention under unbalanced arm loads, keeping torso displacement minimal for precise printing.</small></figcaption>

---

## 5. Technical Specifications

| System Parameter | Design Specification / Target |
| :--- | :--- |
| **Deployment Mode** | Roll-on / Roll-off via flatbed trailer |
| **Mobility Architecture** | Dual-mode hybrid (Wheels for transit / Anchors for printing) |
| **Print Zone** | Direct-under-chassis structural envelope |
| **Primary Structural Materials** | High-strength structural steel frame / Aircraft-grade Aluminum linkages |
| **Engineering Tools** | Autodesk Inventor, ANSYS Static Structural, Keyshot |

---

## 6. Key Takeaways

Kiren's mechanical architecture proves that additive construction can move away from rigid, site-limiting gantries. By combining transit mobility, semi-autonomous anchoring, and an under-torso print design, Weaverbot establishes a scalable foundation for rapid, repeatable housing construction.