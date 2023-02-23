import { IconProps } from '../../icon.types'

type Props = Omit<IconProps, 'name' | 'onClick'>

const ChartsLineIcon: React.FC<Props> = ({ width = '24', height = '24', color = 'white' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1289 2.42261C19.5985 2.42261 19.0898 2.63332 18.7147 3.00839C18.3396 3.38347 18.1289 3.89217 18.1289 4.42261C18.129 4.74726 18.2081 5.06701 18.3594 5.35425L16.6484 7.49292C16.4791 7.44679 16.3044 7.42315 16.1289 7.42261C15.6603 7.42331 15.2069 7.58852 14.8477 7.8894L12.123 6.52612C12.1259 6.49167 12.1278 6.45716 12.1289 6.42261C12.1289 5.89217 11.9182 5.38347 11.5431 5.00839C11.168 4.63332 10.6593 4.42261 10.1289 4.42261C9.59847 4.42261 9.08977 4.63332 8.71469 5.00839C8.33962 5.38347 8.12891 5.89217 8.12891 6.42261C8.12931 6.45714 8.13062 6.49166 8.13281 6.52612L5.41016 7.88745C5.05067 7.58727 4.59724 7.42276 4.12891 7.42261C3.59847 7.42261 3.08977 7.63332 2.71469 8.00839C2.33962 8.38347 2.12891 8.89217 2.12891 9.42261C2.12891 9.95304 2.33962 10.4617 2.71469 10.8368C3.08977 11.2119 3.59847 11.4226 4.12891 11.4226C4.65934 11.4226 5.16805 11.2119 5.54312 10.8368C5.91819 10.4617 6.12891 9.95304 6.12891 9.42261C6.1285 9.38807 6.1272 9.35356 6.125 9.31909L8.84766 7.95776C9.20714 8.25795 9.66057 8.42245 10.1289 8.42261C10.5972 8.42245 11.0507 8.25795 11.4102 7.95776L14.1348 9.31909C14.1319 9.35354 14.13 9.38806 14.1289 9.42261C14.1289 9.95304 14.3396 10.4617 14.7147 10.8368C15.0898 11.2119 15.5985 11.4226 16.1289 11.4226C16.6593 11.4226 17.168 11.2119 17.5431 10.8368C17.9182 10.4617 18.1289 9.95304 18.1289 9.42261C18.1285 9.09862 18.0494 8.77957 17.8984 8.49292L19.6094 6.35425C19.7788 6.39972 19.9535 6.4227 20.1289 6.42261C20.6593 6.42261 21.168 6.21189 21.5431 5.83682C21.9182 5.46175 22.1289 4.95304 22.1289 4.42261C22.1289 3.89217 21.9182 3.38347 21.5431 3.00839C21.168 2.63332 20.6593 2.42261 20.1289 2.42261ZM20.1289 13.4226C19.5985 13.4226 19.0898 13.6333 18.7147 14.0084C18.3396 14.3835 18.1289 14.8922 18.1289 15.4226C18.1294 15.7259 18.1989 16.0251 18.332 16.2976L16.625 18.4871C16.463 18.4449 16.2963 18.4232 16.1289 18.4226C15.8043 18.4227 15.4845 18.5018 15.1973 18.6531L13.0605 16.9421C13.106 16.7727 13.129 16.598 13.1289 16.4226C13.1289 15.8922 12.9182 15.3835 12.5431 15.0084C12.168 14.6333 11.6593 14.4226 11.1289 14.4226C10.6454 14.4235 10.1786 14.5994 9.81488 14.9179C9.45113 15.2364 9.21507 15.6759 9.15039 16.155L5.66992 17.1492C5.4824 16.9221 5.24704 16.7392 4.98065 16.6136C4.71426 16.488 4.42342 16.4228 4.12891 16.4226C3.59847 16.4226 3.08977 16.6333 2.71469 17.0084C2.33962 17.3835 2.12891 17.8922 2.12891 18.4226C2.12891 18.953 2.33962 19.4617 2.71469 19.8368C3.08977 20.2119 3.59847 20.4226 4.12891 20.4226C4.61239 20.4218 5.07919 20.2458 5.44294 19.9273C5.80668 19.6088 6.04274 19.1693 6.10742 18.6902L9.58789 17.696C9.77541 17.9231 10.0108 18.106 10.2772 18.2316C10.5436 18.3572 10.8344 18.4224 11.1289 18.4226C11.4529 18.4222 11.7719 18.3431 12.0586 18.1921L14.1973 19.9031C14.1518 20.0725 14.1288 20.2472 14.1289 20.4226C14.1289 20.953 14.3396 21.4617 14.7147 21.8368C15.0898 22.2119 15.5985 22.4226 16.1289 22.4226C16.6593 22.4226 17.168 22.2119 17.5431 21.8368C17.9182 21.4617 18.1289 20.953 18.1289 20.4226C18.1288 20.0897 18.0455 19.7621 17.8867 19.4695L19.5508 17.3367C19.7382 17.3935 19.933 17.4224 20.1289 17.4226C20.6593 17.4226 21.168 17.2119 21.5431 16.8368C21.9182 16.4617 22.1289 15.953 22.1289 15.4226C22.1289 14.8922 21.9182 14.3835 21.5431 14.0084C21.168 13.6333 20.6593 13.4226 20.1289 13.4226Z"
        fill={color}
      />
    </svg>
  )
}

export default ChartsLineIcon
