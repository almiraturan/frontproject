------Mini Farm Tycoon (React Simulation Game)------
A fast-paced, grid-based farming simulation game built with React and Next.js. Players manage a virtual farm, invest in seeds, and must time their harvests perfectly to grow their balance.

*Game Mechanics*
Planting: Spend 10 units to plant a seed on any empty plot.

Growth Cycle: Watch your investment transform through four stages:

Seed (Tohum) ➔ Sprout (Fidan) ➔ Plant (Bitki) ➔ Flower (Çiçek).

Harvesting: Click a Flower to harvest and earn 20 units (100% profit!).

The Risk: If you don't harvest within 4 seconds of blooming, the flower will wither into a "Dried Flower", resulting in a total loss of your investment.

Economy: Integrated Bank System to track your total balance across the session.

*Technical Stack*
Framework: Next.js (App Router)

Language: TypeScript for type-safe state management.

State Management: * useState for real-time grid updates.

Context API (BankContext) for global currency management.

Styling: CSS Modules for scoped and maintainable UI components.

Asynchronous Logic: Managed growth stages using nested setTimeout logic to simulate real-time progression.
