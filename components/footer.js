import styles from '../styles/components.module.css';

export default function Footer() {
  return (
    <footer >
      <div>
        <div >
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div >
            <a
              href="https://nextjs.org/docs/basic-features/pages"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/wmbryce`}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}