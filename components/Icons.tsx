import { LucideProps } from "lucide-react";

export const Icons = {
  GitHub: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path fill="none" d="M0 0h512v512H0z" />
      <path
        fill="currentColor"
        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
      />
    </svg>
  ),
  LinkedIn: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <g fill="none">
        <rect width={256} height={256} fill="#fff" rx={60} />
        <rect width={256} height={256} fill="#0A66C2" rx={60} />
        <path
          fill="#fff"
          d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
        />
      </g>
    </svg>
  ),
  HTML: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      preserveAspectRatio="xMinYMin meet"
      viewBox="-52.5 0 361 361"
      {...props}
    >
      <path
        fill="#E44D26"
        d="m255.555 70.766-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z"
      />
      <path
        fill="#F16529"
        d="m128 337.95 84.417-23.403 19.86-222.49H128V337.95z"
      />
      <path
        fill="#EBEBEB"
        d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zm7.198 80.61h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z"
      />
      <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zm68.65 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zm62.74 0h16.235v32.508h22.824v16.05h-39.06V0z" />
      <path
        fill="#FFF"
        d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zm0-64.719v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z"
      />
    </svg>
  ),
  CSS: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      aria-label="CSS3"
      viewBox="0 0 512 512"
      {...props}
    >
      <path fill="#264de4" d="M72 460 30 0h451l-41 460-184 52" />
      <path fill="#2965f1" d="M256 37v435l149-41 35-394" />
      <path
        fill="#ebebeb"
        d="M114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59l-117-32"
      />
      <path
        fill="#fff"
        d="M256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"
      />
    </svg>
  ),
  JavaScript: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="#F7DF1E" d="M0 0h256v256H0V0Z" />
      <path d="m67.312 213.932 19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
    </svg>
  ),
  React: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#53C1DE"
        d="M18.679 15.976c0-1.435-1.2-2.598-2.679-2.598-1.48 0-2.679 1.163-2.679 2.598 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597Z"
      />
      <path
        fill="#53C1DE"
        fillRule="evenodd"
        d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822Zm-.284 8.513a28.65 28.65 0 0 0-1.519-3.685 28.625 28.625 0 0 0 1.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691Zm-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29.352 29.352 0 0 0 2.514-3.096c1.45-.125 2.821-.329 4.064-.607.407 1.595 1.194 5.298-.676 6.348Zm-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278 1.228.264 2.589.453 4.042.568.83 1.132 1.7 2.173 2.576 3.085-1.083 1.015-4.163 3.671-6.034 2.625ZM2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29.257 29.257 0 0 0 1.462 3.673 29.689 29.689 0 0 0-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756ZM9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a29.97 29.97 0 0 0-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326Zm11.275 7.073c.957.117 1.875.273 2.736.464-.259.803-.581 1.643-.96 2.504a41.165 41.165 0 0 0-1.776-2.968Zm-4.365-3.529c.591.621 1.183 1.314 1.766 2.066a38.897 38.897 0 0 0-3.546 0 27.651 27.651 0 0 1 1.78-2.066Zm-6.157 6.496a26.884 26.884 0 0 1-.954-2.517 29.762 29.762 0 0 1 2.72-.452 36.303 36.303 0 0 0-1.766 2.97Zm1.793 5.922a28.076 28.076 0 0 1-2.764-.431c.264-.83.59-1.692.972-2.568a36.306 36.306 0 0 0 1.792 2.999Zm4.4 3.525a28.142 28.142 0 0 1-1.805-2.094c1.188.045 2.378.045 3.566-.006a26.611 26.611 0 0 1-1.761 2.1Zm6.117-6.569c.4.886.739 1.744 1.007 2.559a27.97 27.97 0 0 1-2.798.462c.639-.982 1.239-1.99 1.79-3.02Zm-3.42 3.172a41.486 41.486 0 0 1-5.463.01 34.923 34.923 0 0 1-2.746-4.598 34.908 34.908 0 0 1 2.73-4.59c1.82-.133 3.65-.134 5.469 0a39.137 39.137 0 0 1 2.739 4.572 39.146 39.146 0 0 1-2.729 4.606ZM22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a31.597 31.597 0 0 0-4.012-.615 29.379 29.379 0 0 0-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  "Next.js": (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="0 0 24 24"
      {...props}
    >
      <title>{"Next.js icon"}</title>
      <path d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z" />
    </svg>
  ),
  "Node.js": (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      preserveAspectRatio="xMidYMid"
      viewBox="-16.5 0 289 289"
      {...props}
    >
      <path
        fill="#539E43"
        d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571Z"
      />
    </svg>
  ),
  TypeScript: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>{"file_type_typescript_official"}</title>
      <rect
        width={28}
        height={28}
        x={2}
        y={2}
        rx={1.312}
        style={{
          fill: "#3178c6",
        }}
      />
      <path
        d="M18.245 23.759v3.068a6.492 6.492 0 0 0 1.764.575 11.56 11.56 0 0 0 2.146.192 9.968 9.968 0 0 0 2.088-.211 5.11 5.11 0 0 0 1.735-.7 3.542 3.542 0 0 0 1.181-1.266 4.469 4.469 0 0 0 .186-3.394 3.409 3.409 0 0 0-.717-1.117 5.236 5.236 0 0 0-1.123-.877 12.027 12.027 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479 2.089 2.089 0 0 1-.516-.518 1.091 1.091 0 0 1-.181-.618 1.039 1.039 0 0 1 .162-.571 1.4 1.4 0 0 1 .459-.436 2.439 2.439 0 0 1 .726-.283 4.211 4.211 0 0 1 .956-.1 5.942 5.942 0 0 1 .808.058 6.292 6.292 0 0 1 .856.177 5.994 5.994 0 0 1 .836.3 4.657 4.657 0 0 1 .751.422V13.9a7.509 7.509 0 0 0-1.525-.4 12.426 12.426 0 0 0-1.9-.129 8.767 8.767 0 0 0-2.064.235 5.239 5.239 0 0 0-1.716.733 3.655 3.655 0 0 0-1.171 1.271 3.731 3.731 0 0 0-.431 1.845 3.588 3.588 0 0 0 .789 2.34 6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.458 6.458 0 0 1 .942.517 2.463 2.463 0 0 1 .626.585 1.2 1.2 0 0 1 .23.719 1.1 1.1 0 0 1-.144.552 1.269 1.269 0 0 1-.435.441 2.381 2.381 0 0 1-.726.292 4.377 4.377 0 0 1-1.018.105 5.773 5.773 0 0 1-1.969-.35 5.874 5.874 0 0 1-1.805-1.045Zm-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z"
        style={{
          fill: "#fff",
          fillRule: "evenodd",
        }}
      />
    </svg>
  ),
  Git: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M13.414 3.828a2 2 0 0 0-2.828 0l-.672.672 1.568 1.568a2.002 2.002 0 0 1 2.45 2.45l2.05 2.05a2 2 0 1 1-1.414 1.414L13 10.414v4.854A2 2 0 0 1 12 19a2 2 0 0 1-1-3.732V9.732a2 2 0 0 1-.932-2.25L8.5 5.914l-4.672 4.672a2 2 0 0 0 0 2.828l6.758 6.758a2 2 0 0 0 2.828 0l6.758-6.758a2 2 0 0 0 0-2.828l-6.758-6.758ZM9.172 2.414a4 4 0 0 1 5.656 0l6.758 6.758a4 4 0 0 1 0 5.656l-6.758 6.758a4 4 0 0 1-5.656 0l-6.758-6.758a4 4 0 0 1 0-5.656l6.758-6.758Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  "Tailwind CSS": (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>{"file_type_tailwind"}</title>
      <path
        d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"
        style={{
          fill: "#44a8b3",
        }}
      />
    </svg>
  ),
  Prisma: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="0 0 32 32"
      {...props}
    >
      <title>{"file_type_light_prisma"}</title>
      <path
        d="m25.21 24.21-12.471 3.718a.525.525 0 0 1-.667-.606l4.456-21.511a.43.43 0 0 1 .809-.094l8.249 17.661a.6.6 0 0 1-.376.832Zm2.139-.878L17.8 2.883A1.531 1.531 0 0 0 16.491 2a1.513 1.513 0 0 0-1.4.729L4.736 19.648a1.592 1.592 0 0 0 .018 1.7l5.064 7.909a1.628 1.628 0 0 0 1.83.678l14.7-4.383a1.6 1.6 0 0 0 1-2.218Z"
        style={{
          fill: "#0c344b",
          fillRule: "evenodd",
        }}
      />
    </svg>
  ),
  MongoDB: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="0 -183 512 512"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#8E714E"
          d="M476.713 60.463c-.46.092-.922 1.107-.922 1.66-.092 3.692-.184 13.474-.184 20.118 0 .185.276.554.553.554 1.384.092 4.706.184 7.567.184 3.968 0 6.275-.553 7.568-1.106 3.321-1.662 4.89-5.261 4.89-9.23 0-8.95-6.275-12.365-15.596-12.365-.646-.092-2.49-.092-3.876.185zm23.81 41.25c0-9.136-6.737-14.212-18.918-14.212-.554 0-4.43-.092-5.353.092-.277.093-.645.278-.645.555 0 6.551-.093 16.98.184 21.04.184 1.753 1.477 4.245 3.046 4.983 1.66.923 5.444 1.107 8.028 1.107 7.29 0 13.658-4.06 13.658-13.565zm-42.634-46.325c.922 0 3.69.276 10.796.276 6.737 0 12.089-.184 18.641-.184 8.028 0 19.102 2.86 19.102 14.857 0 5.906-4.153 10.613-9.597 12.92-.276.092-.276.276 0 .368 7.751 1.939 14.581 6.737 14.581 15.78 0 8.86-5.537 14.489-13.566 17.996-4.891 2.122-10.981 2.86-17.164 2.86-4.707 0-17.349-.553-24.362-.368-.738-.278.646-3.6 1.291-4.153 1.662-.093 2.953-.185 4.707-.739 2.492-.645 2.768-1.384 3.137-5.167.185-3.23.185-14.674.185-22.794 0-11.166.093-18.733 0-22.424-.092-2.86-1.107-3.784-3.137-4.338-1.57-.276-4.153-.646-6.276-.922-.462-.462 1.107-3.6 1.662-3.968zm-53.248 57.399c2.216 1.752 6.553 2.49 10.429 2.49 4.983 0 9.966-.921 14.765-5.26 4.891-4.428 8.305-11.257 8.305-22.146 0-10.429-3.968-18.919-12.089-23.901-4.614-2.862-10.52-4.06-17.349-4.06-2.03 0-3.968.092-5.167.645-.278.185-.923 1.015-.923 1.476-.185 1.846-.185 16.057-.185 24.363 0 8.582 0 20.579.185 21.963 0 1.385.645 3.507 2.03 4.43zm-20.948-57.4c1.754 0 8.49.277 11.72.277 5.815 0 9.967-.276 20.948-.276 9.228 0 16.98 2.491 22.517 7.197 6.736 5.814 10.244 13.843 10.244 23.624 0 13.935-6.368 21.964-12.736 26.578-6.366 4.706-14.672 7.474-26.484 7.474-6.275 0-17.072-.184-26.024-.277h-.092c-.461-.83.738-4.06 1.476-4.152 2.4-.277 3.046-.37 4.246-.83 1.937-.739 2.307-1.754 2.584-5.168.276-6.368.184-14.027.184-22.702 0-6.182.092-18.272-.093-22.148-.276-3.229-1.66-4.06-4.429-4.614-1.384-.276-3.23-.646-5.813-.922-.37-.647 1.291-3.507 1.752-4.06z"
        />
        <path
          fill="#442D22"
          d="M272.033 116.385c-2.307-.277-3.968-.645-5.998-1.568-.277-.185-.739-1.107-.739-1.477-.184-3.23-.184-12.458-.184-18.64 0-4.984-.83-9.321-2.953-12.366-2.492-3.508-6.09-5.537-10.705-5.537-4.06 0-9.505 2.768-14.027 6.644-.092.092-.83.739-.738-.277 0-1.015.185-3.045.277-4.43.093-1.292-.646-1.937-.646-1.937-2.953 1.476-11.258 3.414-14.304 3.69-2.214.463-2.768 2.585-.46 3.323h.092c2.49.738 4.152 1.569 5.443 2.4.923.738.831 1.753.831 2.584.092 6.92.092 17.533-.184 23.347-.092 2.307-.738 3.137-2.4 3.506l.185-.092c-1.292.277-2.307.553-3.876.738-.554.554-.554 3.507 0 4.153 1.015 0 6.367-.277 10.798-.277 6.09 0 9.228.277 10.796.277.646-.738.831-3.507.462-4.153-1.754-.092-3.046-.276-4.245-.646-1.661-.37-2.123-1.199-2.216-3.137-.183-4.892-.183-15.227-.183-22.24 0-1.938.553-2.861 1.106-3.415 2.123-1.845 5.538-3.137 8.583-3.137 2.953 0 4.89.923 6.367 2.123 2.03 1.66 2.676 4.06 2.953 5.813.461 3.968.277 11.812.277 18.641 0 3.691-.277 4.614-1.66 5.075-.647.277-2.308.647-4.246.83-.646.647-.461 3.508 0 4.154 2.676 0 5.814-.277 10.428-.277 5.721 0 9.413.277 10.89.277.46-.554.645-3.23.276-3.969zm25.562-35.25c-4.89 0-7.936 3.783-7.936 9.688 0 5.999 2.676 12.92 10.243 12.92 1.292 0 3.692-.554 4.798-1.846 1.754-1.66 2.954-4.983 2.954-8.49 0-7.659-3.784-12.273-10.059-12.273zm-.646 40.787c-1.845 0-3.138.554-3.968 1.016-3.876 2.49-5.629 4.89-5.629 7.752 0 2.675 1.015 4.797 3.23 6.643 2.676 2.307 6.367 3.415 11.073 3.415 9.413 0 13.566-5.076 13.566-10.058 0-3.508-1.754-5.815-5.352-7.106-2.584-1.108-7.29-1.662-12.92-1.662zm.646 23.994c-5.629 0-9.69-1.2-13.196-3.876-3.415-2.584-4.891-6.46-4.891-9.136 0-.738.185-2.769 1.846-4.614 1.014-1.108 3.23-3.23 8.49-6.829.184-.092.276-.184.276-.37 0-.184-.185-.369-.369-.46-4.337-1.661-5.629-4.338-5.999-5.814v-.185c-.091-.554-.276-1.107.555-1.661.646-.461 1.569-1.015 2.583-1.66 1.569-.924 3.23-1.939 4.245-2.77.185-.184.185-.368.185-.553 0-.185-.185-.37-.37-.461-6.458-2.123-9.688-6.922-9.688-14.12 0-4.706 2.122-8.951 5.905-11.627 2.584-2.03 9.044-4.522 13.289-4.522h.277c4.337.092 6.736 1.015 10.15 2.215 1.846.646 3.6.922 6 .922 3.598 0 5.167-1.107 6.458-2.398.093.184.278.646.37 1.845.092 1.2-.277 2.953-1.2 4.245-.738 1.015-2.399 1.754-4.06 1.754h-.462c-1.661-.185-2.4-.37-2.4-.37l-.368.185c-.092.185 0 .369.092.646l.093.185c.184.83.553 3.321.553 3.968 0 7.567-3.045 10.888-6.275 13.38-3.138 2.307-6.736 3.783-10.797 4.153-.092 0-.46 0-1.292.092-.461 0-1.107.093-1.2.093h-.092c-.738.184-2.583 1.107-2.583 2.675 0 1.384.83 3.046 4.798 3.323.83.092 1.66.092 2.584.185 5.26.368 11.812.83 14.857 1.845 4.245 1.568 6.921 5.352 6.921 9.874 0 6.83-4.89 13.197-13.011 17.164-3.968 1.754-7.937 2.677-12.274 2.677zm52.6-64.32c-1.937 0-3.691.46-4.983 1.383-3.598 2.215-5.444 6.645-5.444 13.104 0 12.09 6.09 20.58 14.765 20.58 2.584 0 4.614-.739 6.367-2.215 2.676-2.216 4.061-6.645 4.061-12.828 0-11.996-5.999-20.025-14.765-20.025zm1.662 39.496c-15.688 0-21.317-11.535-21.317-22.332 0-7.567 3.045-13.381 9.135-17.534 4.338-2.676 9.506-4.152 14.12-4.152 11.996 0 20.394 8.582 20.394 20.948 0 8.397-3.322 15.041-9.69 19.102-3.045 2.03-8.305 3.968-12.643 3.968h.001zM187.411 81.595c-1.938 0-3.691.461-4.984 1.384-3.598 2.215-5.444 6.645-5.444 13.104 0 12.09 6.09 20.58 14.765 20.58 2.584 0 4.614-.739 6.368-2.215 2.675-2.216 4.06-6.645 4.06-12.828 0-11.996-5.906-20.025-14.765-20.025zm1.661 39.497c-15.688 0-21.317-11.535-21.317-22.332 0-7.567 3.045-13.381 9.135-17.534 4.338-2.676 9.506-4.152 14.12-4.152 11.997 0 20.394 8.582 20.394 20.948 0 8.397-3.322 15.041-9.69 19.102-2.953 2.03-8.213 3.968-12.642 3.968zm-105.478-.923c-.185-.276-.37-1.107-.277-2.122 0-.739.185-1.2.277-1.384 1.938-.278 2.953-.555 4.06-.831 1.846-.462 2.584-1.476 2.676-3.783.278-5.537.278-16.058.185-23.348v-.185c0-.83 0-1.846-1.015-2.584-1.477-.922-3.23-1.752-5.537-2.4-.83-.275-1.384-.737-1.292-1.29 0-.554.554-1.2 1.754-1.385 3.045-.277 10.98-2.214 14.118-3.599.185.184.462.739.462 1.477l-.092 1.014c-.093 1.016-.185 2.216-.185 3.415 0 .369.37.646.738.646.185 0 .37-.092.554-.185 5.906-4.614 11.258-6.275 14.026-6.275 4.523 0 8.03 2.123 10.706 6.552.184.278.369.37.646.37.184 0 .46-.092.553-.277 5.445-4.153 10.89-6.645 14.488-6.645 8.582 0 13.658 6.368 13.658 17.165 0 3.045 0 7.013-.092 10.613 0 3.229-.092 6.182-.092 8.305 0 .46.645 1.937 1.66 2.214 1.292.646 3.046.923 5.353 1.292h.092c.185.646-.184 3.045-.553 3.507-.554 0-1.385 0-2.307-.092a136.208 136.208 0 0 0-7.014-.185c-5.721 0-8.674.092-11.536.277-.183-.738-.276-2.953 0-3.507 1.662-.276 2.492-.554 3.508-.83 1.846-.554 2.307-1.385 2.4-3.784 0-1.753.368-16.703-.186-20.302-.553-3.691-3.322-8.028-9.413-8.028-2.307 0-5.905.923-9.412 3.598-.184.185-.37.646-.37.923v.093c.37 1.937.37 4.153.37 7.567v5.998c0 4.153-.093 8.029 0 10.981 0 2.031 1.2 2.492 2.215 2.862.554.091.922.184 1.384.276.83.185 1.661.37 2.953.646.185.37.185 1.569-.092 2.584-.093.554-.278.83-.37.923-3.137-.092-6.367-.185-11.073-.185-1.384 0-3.784.093-5.814.093-1.662 0-3.23.092-4.152.092-.093-.185-.278-.83-.278-1.846 0-.83.185-1.476.37-1.661.461-.092.83-.184 1.292-.184 1.106-.185 2.03-.37 2.952-.554 1.57-.461 2.123-1.292 2.215-3.322.277-4.614.554-17.81-.092-21.133-1.107-5.352-4.152-8.028-9.044-8.028-2.86 0-6.46 1.384-9.412 3.6-.462.368-.831 1.29-.831 2.121v5.445c0 6.644 0 14.95.092 18.549.093 1.106.461 2.399 2.584 2.86.462.092 1.2.277 2.123.37l1.66.276c.186.554.093 2.769-.276 3.507-.923 0-2.03-.092-3.323-.092a150.02 150.02 0 0 0-7.197-.185c-3.23 0-5.537.092-7.383.185-1.292-.185-2.307-.185-3.414-.185z"
        />
        <path
          fill="#FFF"
          d="m35.053 142.317-3.783-1.293s.462-19.286-6.46-20.67c-4.613-5.353.74-227.013 17.35-.739 0 0-5.722 2.86-6.737 7.752-1.108 4.799-.37 14.95-.37 14.95z"
        />
        <path
          fill="#A6A385"
          d="m35.053 142.317-3.783-1.293s.462-19.286-6.46-20.67c-4.613-5.353.74-227.013 17.35-.739 0 0-5.722 2.86-6.737 7.752-1.108 4.799-.37 14.95-.37 14.95z"
        />
        <path
          fill="#FFF"
          d="M37.084 123.676s33.13-21.779 25.377-67.09c-7.474-32.943-25.1-43.74-27.038-47.893C33.301 5.74 31.27.573 31.27.573l1.385 91.634c0 .093-2.861 28.054 4.43 31.47"
        />
        <path
          fill="#499D4A"
          d="M37.084 123.676s33.13-21.779 25.377-67.09c-7.474-32.943-25.1-43.74-27.038-47.893C33.301 5.74 31.27.573 31.27.573l1.385 91.634c0 .093-2.861 28.054 4.43 31.47"
        />
        <path
          fill="#FFF"
          d="M29.333 124.875S-1.767 103.65.079 66.277C1.832 28.903 23.795 10.539 28.04 7.217c2.769-2.953 2.861-4.061 3.046-7.014 1.938 4.153 1.569 62.106 1.845 68.934.83 26.3-1.476 50.756-3.598 55.738z"
        />
        <path
          fill="#58AA50"
          d="M29.333 124.875S-1.767 103.65.079 66.277C1.832 28.903 23.795 10.539 28.04 7.217c2.769-2.953 2.861-4.061 3.046-7.014 1.938 4.153 1.569 62.106 1.845 68.934.83 26.3-1.476 50.756-3.598 55.738z"
        />
      </g>
    </svg>
  ),
  Express: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="-2.5 0 32 32"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M-3 0h32v32H-3z" />
        <path
          fill="#353535"
          d="M1.192 16.267c.04 2.065.288 3.982.745 5.75.456 1.767 1.16 3.307 2.115 4.618.953 1.31 2.185 2.343 3.694 3.098 1.51.755 3.357 1.132 5.54 1.132 3.22 0 5.89-.844 8.016-2.532 2.125-1.69 3.446-4.22 3.962-7.597h1.192c-.437 3.575-1.847 6.345-4.23 8.312-2.384 1.966-5.324 2.95-8.82 2.95-2.383.04-4.42-.338-6.107-1.133-1.69-.794-3.07-1.917-4.142-3.367-1.073-1.45-1.867-3.158-2.383-5.124C.258 20.408 0 18.294 0 16.028c0-2.542.377-4.806 1.132-6.792C1.887 7.25 2.88 5.57 4.112 4.2A12.408 12.408 0 0 1 8.4 1.074C10.03.358 11.698 0 13.406 0c2.383 0 4.44.457 6.167 1.37 1.728.914 3.138 2.126 4.23 3.635 1.093 1.51 1.887 3.238 2.384 5.184.496 1.945.705 3.97.625 6.077H1.193zm24.43-1.192c0-1.867-.26-3.645-.775-5.333-.516-1.688-1.28-3.168-2.294-4.44a10.834 10.834 0 0 0-3.784-3.008c-1.51-.735-3.258-1.102-5.244-1.102-1.67 0-3.228.317-4.678.953-1.45.636-2.72 1.56-3.813 2.77-1.092 1.212-1.976 2.672-2.652 4.38-.675 1.708-1.072 3.635-1.19 5.78h24.43z"
        />
      </g>
    </svg>
  ),
  MySQL: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      preserveAspectRatio="xMidYMid"
      viewBox="0 -2 256 256"
      {...props}
    >
      <path
        fill="#00546B"
        d="M235.648 194.212c-13.918-.347-24.705 1.045-33.752 4.872-2.61 1.043-6.786 1.044-7.134 4.35 1.392 1.392 1.566 3.654 2.784 5.567 2.09 3.479 5.741 8.177 9.047 10.614 3.653 2.783 7.308 5.566 11.134 8.002 6.786 4.176 14.442 6.611 21.053 10.787 3.829 2.434 7.654 5.568 11.482 8.177 1.914 1.39 3.131 3.654 5.568 4.523v-.521c-1.219-1.567-1.567-3.828-2.784-5.568-1.738-1.74-3.48-3.306-5.22-5.046-5.045-6.784-11.308-12.7-18.093-17.571-5.567-3.828-17.747-9.047-20.008-15.485 0 0-.175-.173-.348-.347 3.827-.348 8.35-1.74 12.005-2.784 5.915-1.567 11.308-1.218 17.398-2.784 2.783-.696 5.567-1.566 8.35-2.436v-1.565c-3.13-3.132-5.392-7.307-8.698-10.265-8.873-7.657-18.617-15.137-28.707-21.4-5.394-3.48-12.354-5.742-18.095-8.699-2.086-1.045-5.567-1.566-6.784-3.306-3.133-3.827-4.873-8.872-7.134-13.396-5.044-9.57-9.917-20.182-14.267-30.272-3.13-6.786-5.044-13.572-8.872-19.834-17.92-29.577-37.406-47.497-67.33-65.07-6.438-3.653-14.093-5.219-22.27-7.132-4.348-.175-8.699-.522-13.048-.697-2.784-1.218-5.568-4.523-8.004-6.089C34.006 4.573 8.429-8.996 1.122 8.924c-4.698 11.308 6.96 22.442 10.96 28.185 2.96 4.001 6.786 8.524 8.874 13.048 1.218 2.956 1.565 6.09 2.783 9.221 2.785 7.653 5.393 16.18 9.048 23.314 1.914 3.653 4.001 7.48 6.437 10.786 1.392 1.913 3.827 2.784 4.35 5.915-2.435 3.48-2.61 8.7-4.003 13.049-6.263 19.66-3.826 44.017 5.046 58.457 2.783 4.348 9.395 13.92 18.268 10.265 7.83-3.131 6.09-13.048 8.35-21.747.524-2.09.176-3.48 1.219-4.872v.349c2.436 4.87 4.871 9.569 7.133 14.44 5.394 8.524 14.788 17.398 22.617 23.314 4.177 3.13 7.482 8.524 12.702 10.438v-.523h-.349c-1.044-1.566-2.61-2.261-4.001-3.48-3.131-3.13-6.612-6.958-9.047-10.438-7.306-9.744-13.745-20.53-19.486-31.665-2.783-5.392-5.22-11.308-7.481-16.701-1.045-2.09-1.045-5.22-2.784-6.263-2.61 3.827-6.437 7.133-8.351 11.83-3.304 7.481-3.653 16.702-4.871 26.27-.696.176-.349 0-.697.35-5.566-1.394-7.48-7.134-9.569-12.006-5.22-12.352-6.09-32.186-1.565-46.452 1.218-3.654 6.438-15.136 4.35-18.616-1.044-3.306-4.525-5.22-6.438-7.829-2.261-3.306-4.698-7.48-6.263-11.135-4.176-9.743-6.264-20.53-10.787-30.273-2.088-4.524-5.74-9.22-8.699-13.396-3.305-4.697-6.959-8.004-9.569-13.571-.869-1.913-2.088-5.045-.696-7.133.348-1.392 1.043-1.913 2.436-2.261 2.262-1.915 8.7.521 10.96 1.565 6.438 2.608 11.831 5.046 17.225 8.699 2.435 1.74 5.045 5.046 8.176 5.916h3.654c5.568 1.217 11.83.348 17.05 1.913 9.222 2.957 17.572 7.307 25.054 12.005 22.792 14.44 41.58 34.97 54.282 59.501 2.088 4 2.957 7.656 4.871 11.83 3.655 8.526 8.178 17.225 11.83 25.576 3.654 8.176 7.133 16.528 12.353 23.314 2.61 3.652 13.048 5.567 17.746 7.481 3.48 1.565 8.874 2.958 12.005 4.871 5.915 3.652 11.83 7.83 17.398 11.83 2.784 2.088 11.482 6.438 12.005 9.917Z"
      />
      <path
        fill="#00546B"
        d="M58.186 43.022c-2.957 0-5.044.35-7.132.871v.348h.348c1.393 2.784 3.827 4.698 5.566 7.133 1.393 2.783 2.61 5.568 4.003 8.352.173-.175.347-.348.347-.348 2.437-1.741 3.654-4.524 3.654-8.7-1.044-1.217-1.218-2.435-2.088-3.653-1.043-1.741-3.306-2.61-4.698-4.003Z"
      />
    </svg>
  ),
  "Framer Motion": (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={1073.627}
      height={293.467}
      {...props}
    >
      <path
        d="M0 2201.02h1462.79v-722.49H722.492Zm0-722.49h722.492l740.298-739.221H722.492V0L0 739.309v739.221M2840.64 638.609V1730.21h673.19V1512.1h-420.5v-286.27h420.5v-218.06h-420.5V638.609h-252.69M3664.85 638.609v756.031h251.65v-168.81c0 50.35 33.57 101.74 67.11 135.27 50.35 33.54 84.97 50.35 135.27 50.35 33.54 0 50.3-16.81 67.11-16.81v-219.15h-67.11c-67.12 0-118.5-16.77-152.04-67.12-33.57-33.53-50.34-100.6-50.34-184.53V638.609h-251.65M4589.69 605.039c-118.46 0-202.38 50.352-269.46 117.473-50.34 67.109-83.92 167.769-83.92 285.228 0 83.88 16.81 150.95 33.58 201.3 33.57 67.12 83.83 118.5 134.19 152.03 50.34 33.59 117.46 50.35 185.61 50.35 50.34 0 100.69-16.76 151-33.53 33.53-16.82 67.12-50.35 83.88-101.73v118.5h251.69V638.629h-251.69v100.652c-16.76-33.551-50.35-67.121-83.88-100.652-50.31-16.809-100.66-33.59-151-33.59m67.11 201.391c67.12 0 100.65 16.73 134.24 67.082 33.53 33.527 50.3 83.879 50.3 134.228 0 67.07-16.77 100.65-50.3 150.95-33.59 33.58-67.12 50.35-134.24 50.35-50.34 0-101.73-16.77-135.26-50.35-33.54-50.3-50.31-83.88-50.31-150.95 0-50.349 16.77-100.701 50.31-134.228 33.53-50.352 84.92-67.082 135.26-67.082M5261.85 638.609v756.031h234.88v-118.46c16.77 51.39 50.3 68.15 83.89 101.69 51.38 16.77 84.96 33.58 135.26 33.58 117.46 0 201.35-50.35 234.89-135.27 33.53 34.57 67.11 68.15 100.65 101.69 50.34 16.77 101.73 33.58 152.07 33.58 184.54 0 268.43-100.7 268.43-303.08V638.609h-234.89v419.421c0 50.34-16.76 83.92-33.54 117.46-16.81 16.76-50.34 33.58-84.91 33.58-50.35 0-83.93-16.82-100.7-50.35-16.77-16.77-33.58-67.12-33.58-134.24V638.609h-234.88v419.421c0 50.34-16.73 83.92-33.54 117.46-16.77 16.76-50.3 33.58-83.88 33.58-34.61 0-68.2-16.82-101.69-50.35-16.81-16.77-33.58-67.12-33.58-134.24V638.609h-234.88M7396.77 1058.05V940.629h-554.69c0-50.348 16.78-83.93 50.36-117.457 16.76-16.731 67.07-33.543 117.42-33.543 83.87 0 117.46 16.812 150.95 67.07h235.96c-16.77-67.07-50.34-134.187-134.19-184.539-67.16-33.531-152.03-67.109-252.72-67.109-134.23 0-234.89 33.578-302 117.461-68.16 67.117-118.5 167.769-118.5 285.228 0 134.19 50.34 218.07 118.5 303.03 67.11 67.12 167.77 100.66 302 100.66 117.46 0 202.38-33.54 286.26-100.66 67.08-68.14 100.65-152.07 100.65-252.72m-554.69 33.57h318.73c0 50.31-16.72 83.89-33.49 117.43-33.59 33.58-67.12 33.58-117.46 33.58-50.35 0-100.66-16.82-134.23-33.58-16.77-33.54-33.55-67.12-33.55-117.43M7531.02 638.609v756.031h235.92v-168.81c16.76 50.35 50.3 101.74 83.87 135.27 33.59 33.54 83.93 50.35 134.19 50.35 16.82 0 50.36-16.81 67.16-16.81v-219.15h-83.92c-50.31 0-100.65-16.77-134.19-67.12-50.35-33.53-67.11-100.6-67.11-184.53V638.609h-235.92"
        style={{
          fill: "#040606",
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
        }}
        transform="matrix(.13333 0 0 -.13333 0 293.467)"
      />
    </svg>
  ),
  Bootstrap: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M4.985 2c-1.37 0-2.383 1.199-2.337 2.498.043 1.25-.013 2.867-.42 4.186-.41 1.322-1.1 2.16-2.228 2.268v1.215c1.128.107 1.819.945 2.227 2.268.408 1.319.464 2.936.42 4.185-.045 1.3.968 2.499 2.338 2.499h14.032c1.37 0 2.383-1.199 2.337-2.499-.043-1.249.013-2.866.42-4.185.409-1.323 1.098-2.16 2.226-2.268v-1.215c-1.128-.108-1.817-.946-2.226-2.268-.407-1.32-.463-2.937-.42-4.186C21.4 3.198 20.386 2 19.017 2H4.985ZM16.27 13.769c0 1.79-1.335 2.875-3.55 2.875H8.949a.407.407 0 0 1-.407-.407V6.881a.407.407 0 0 1 .407-.406h3.75c1.847 0 3.06 1 3.06 2.537 0 1.078-.816 2.043-1.855 2.213v.056c1.415.155 2.367 1.135 2.367 2.488ZM12.31 7.764h-2.15v3.038h1.811c1.4 0 2.172-.564 2.172-1.572 0-.944-.664-1.466-1.833-1.466Zm-2.15 4.243v3.347h2.23c1.457 0 2.23-.585 2.23-1.684 0-1.1-.794-1.663-2.324-1.663h-2.136Z"
        clipRule="evenodd"
      />
    </svg>
  ),
};
