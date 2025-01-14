import { LinkIcon } from '@heroicons/react/solid';

export function WhyAMonorepo() {
  return (
    <div
      id="why-a-monorepo"
      className="bg-slate-50 dark:bg-slate-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div className="relative">
        <div className="text-center text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl group">
          # But why?
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#why-a-monorepo"
            className="text-gray-900 dark:text-white flex inline-flex items-center"
          >
            <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
          </a>
        </div>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-700 dark:text-gray-300">
          Let's go deeper into the rabbit hole.
        </p>
      </div>
      <article className="mt-24 lg:mt-36 relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="max-w-2xl mx-auto">
          <h1
            id="polyrepo-concept"
            className="text-3xl tracking-tight font-semibold text-gray-800 dark:text-gray-100 sm:text-4xl group"
          >
            A &ldquo;Polyrepo&rdquo;
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#polyrepo-concept"
              className="text-gray-900 dark:text-white flex inline-flex items-center"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            For the sake of this discussion, let's say the opposite of monorepo
            is a "polyrepo". A polyrepo is the current standard way of
            developing applications: a repo for each team, application, or
            project. And it's common that each repo has a single build artifact,
            and simple build pipeline.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mt-10 w-full h-full object-cover"
            src="/images/polyrepo-practice.svg"
            alt="polyrepo practice"
          />
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            The industry has moved to the polyrepo way of doing things for one
            big reason: <b className="text-semibold">team autonomy</b>. Teams
            want to make their own decisions about what libraries they'll use,
            when they'll deploy their apps or libraries, and who can contribute
            to or use their code.
          </p>
          <img
            aria-hidden="true"
            loading="lazy"
            className="mt-10 w-full h-full object-cover"
            src="/images/spectrum-real-world.svg"
            alt="spectrum real world"
          />
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            Those are all good things, so why should teams do anything
            differently? Because this autonomy is provided by isolation, and
            isolation harms collaboration. More specifically, these are common
            drawbacks to a polyrepo environment:
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-2 lg:gap-22">
          {/*item*/}
          <section className="px-4 py-6 bg-slate-100 dark:bg-slate-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 capitalize">
                Polyrepo
              </span>
            </div>
            <div className="block mt-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Cumbersome code sharing
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                To share code across repositories, you'd likely create a
                repository for the shared code. Now you have to set up the
                tooling and CI environment, add committers to the repo, and set
                up package publishing so other repos can depend on it. And let's
                not get started on reconciling incompatible versions of third
                party libraries across repositories...
              </p>
            </div>
          </section>
          <section className="px-4 py-6 bg-slate-100 dark:bg-slate-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 capitalize">
                Polyrepo
              </span>
            </div>
            <div className="block mt-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Significant code duplication
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                No one wants to go through the hassle of setting up a shared
                repo, so teams just write their own implementations of common
                services and components in each repo. This wastes up-front time,
                but also increases the burden of maintenance, security, and
                quality control as the components and services change.
              </p>
            </div>
          </section>
          <section className="px-4 py-6 bg-slate-100 dark:bg-slate-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 capitalize">
                Polyrepo
              </span>
            </div>
            <div className="block mt-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Costly cross-repo changes to shared libraries and consumers
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Consider a critical bug or breaking change in a shared library:
                the developer needs to set up their environment to apply the
                changes across multiple repositories with disconnected revision
                histories. Not to speak about the coordination effort of
                versioning and releasing the packages.
              </p>
            </div>
          </section>
          <section className="px-4 py-6 bg-slate-100 dark:bg-slate-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 capitalize">
                Polyrepo
              </span>
            </div>
            <div className="block mt-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Inconsistent tooling
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Each project uses its own set of commands for running tests,
                building, serving, linting, deploying, and so forth.
                Inconsistency creates mental overhead of remembering which
                commands to use from project to project.
              </p>
            </div>
          </section>
        </div>
      </article>
      <article className="mt-24 lg:mt-36 relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="max-w-2xl mx-auto">
          <h1
            id="monorepo-concept"
            className="text-3xl tracking-tight font-semibold text-gray-800 dark:text-gray-100 sm:text-4xl group"
          >
            A &ldquo;Monorepo&rdquo;
            <a
              aria-hidden="true"
              tabIndex={-1}
              href="#monorepo-concept"
              className="text-gray-900 dark:text-white flex inline-flex items-center"
            >
              <LinkIcon className="ml-2 h-6 w-6 opacity-0 group-hover:opacity-100" />
            </a>
          </h1>
          <p className="mt-3 text-xl text-gray-700 dark:text-gray-300 sm:mt-4">
            We can end up in pretty tricky situations when working in a
            polyrepo. But how can a monorepo help solve all of them?
          </p>
        </div>

        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-2 lg:gap-22">
          {/*item*/}
          <section className="px-4 py-6 bg-slate-100 dark:bg-slate-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 capitalize">
                Monorepo
              </span>
            </div>
            <div className="block mt-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                No overhead to create new projects
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Use the existing CI setup, and no need to publish versioned
                packages if all consumers are in the same repo.
              </p>
            </div>
          </section>
          <section className="px-4 py-6 bg-slate-100 dark:bg-slate-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 capitalize">
                Monorepo
              </span>
            </div>
            <div className="block mt-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Atomic commits across projects
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Everything works together at every commit. There's no such thing
                as a breaking change when you fix everything in the same commit.
              </p>
            </div>
          </section>
          <section className="px-4 py-6 bg-slate-100 dark:bg-slate-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 capitalize">
                Monorepo
              </span>
            </div>
            <div className="block mt-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                One version of everything
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                No need to worry about incompatibilities because of projects
                depending on conflicting versions of third party libraries.
              </p>
            </div>
          </section>
          <section className="px-4 py-6 bg-slate-100 dark:bg-slate-900 rounded-md shadow-md">
            <div>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 capitalize">
                Monorepo
              </span>
            </div>
            <div className="block mt-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Developer mobility
              </h2>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                Get a consistent way of building and testing applications
                written using different tools and technologies. Developers can
                confidently contribute to other teams’ applications and verify
                that their changes are safe.
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

export default WhyAMonorepo;
