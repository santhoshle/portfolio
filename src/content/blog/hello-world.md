---
title: "Hello, World: Where I've Been and Where I'm Headed"
description: "Twelve years as a software engineer, my move into identity and access management, and what I plan to focus on next."
date: 2026-10-17
tags: ["career", "iam"]
draft: false
---

Every programmer's first program prints "Hello, World", so it seems like the right title for my first post. I've been writing software for more than twelve years, and I'm starting this blog to look back at that work, explain the shift I'm making now, and keep myself accountable for what comes next.

## Where it started

My career began in 2013 at **Espros Technology Consultants**, where I owned a **JavaFX** desktop application. I kept it stable and fast, added **Highcharts** so users could see their data visually, and built a custom CMS that made content delivery about 30% faster. That job taught me what it means to be responsible for a product end to end: when something broke, it was mine to fix.

## Growing up as an engineer

In 2014 I joined **Vernalis** (now Orion) and stayed almost five years. My work there got much broader:

- A Sports ERP API backed by **PostgreSQL** and **MongoDB**
- **Elasticsearch**-powered search and analytics that made data retrieval about 40% faster
- A sports game simulation module that cut QA testing time by 70%
- Integrations with third-party services such as the **Clickatell** SMS gateway

That was also when security work started finding me. I implemented **Okta** authentication and **MSSQL Always On** column-level encryption. Looking back, those two projects were the first hints of where my career was going.

## Leading and modernizing

Since 2019 I've been a **Senior Lead Engineer at Candela Labs** (since acquired by Sapiens). Much of my work there has been modernizing legacy systems without disrupting the people who rely on them:

- Building a web-based **AS400/IBMi TN5250 emulator** with **React** and **Spring Boot**, so mainframe users could work from a modern browser interface
- Migrating an enterprise application from the legacy **Acegi Security** framework to **Spring Security**
- Designing **Keycloak** integrations for SSO, **OAuth 2.0 / OIDC** flows and role-based access control across microservices
- Mentoring junior developers on IAM standards, secure coding and microservice architecture

## The transition: from full-stack generalist to IAM specialist

For most of my career I've called myself a full-stack engineer, and I still am one. But looking back, the projects I've enjoyed most and learned the most from were about **identity**: who a user is, what they can access, and how that trust passes safely between systems.

So I'm deliberately narrowing my focus. I now call myself an **IAM Integration Specialist**: someone who designs authentication and authorization flows with **Keycloak**, **Okta**, **OAuth 2.0**, **OIDC** and **SAML 2.0**, and who can still build the Java, Spring Boot and React applications on both sides of them. I don't see full-stack skills as something I'm leaving behind. They're what make me useful in identity work, because I understand the applications that IAM has to protect.

## What's next

To go deeper, I'm building things in public. Several projects are already on my [roadmap](/roadmap):

- **An OAuth 2.0 Authorization Server from scratch** in Spring Boot, without the Spring Authorization Server abstraction, so I implement every grant type and token behavior myself
- **A Keycloak identity broker** that federates Okta, a SAML 2.0 IdP and Google behind one realm
- **A zero-downtime legacy migration utility** that moves users from an old database or Okta instance into Keycloak with just-in-time migration, so nobody is forced to reset their password
- **A polyglot IAM suite**, with one Keycloak server in front of Spring Boot, FastAPI and Express.js resource servers, each enforcing the same rules
- **Microservice token exchange using the BFF pattern**, plus **IAM configuration as code** through a CI/CD pipeline

I'm also rebuilding the **TN5250 emulator** from scratch in Java 17, this time with a protocol engine that's fully independent of its JavaFX and browser front ends.

## And the games

Outside work, I'm a solo game developer under the name **Solaras Light**. I've been learning **Unreal Engine 5** and **Blender**, and I've shipped a few small games, including [Canyon Salvo](https://solaraslight.itch.io/canyon-salvo). The two interests are starting to overlap, too: one project on my list is an auth toolkit that brings the OAuth 2.0 Device Authorization Flow and PKCE to Unreal, Unity and Godot.

## What to expect here

On this blog I'll write about:

- Identity and access management in practice: Keycloak, Okta, OAuth 2.0, OIDC and SAML
- Lessons from modernizing legacy enterprise systems
- Progress updates on the roadmap projects above
- Notes from game development with Unreal Engine and Blender

Thanks for reading. Hello, world.
