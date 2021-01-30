
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Link from "next/link"

const Pager = (props) => {
  const { total, page, perPage, href, asCallback } = props
  const prevPage = page > 1 ? page - 1 : null
  let nextPage = null
  if (page < Math.ceil(total / perPage)) {
    nextPage = page + 1
  }
  return (
    <div className="pager mb-10 text-lg">
      <span className="pager-item">
        {prevPage ? (
          <Button color="primary" variant="outlined" startIcon={<ArrowBackIosIcon/>}>
          <Link href={href} as={asCallback(prevPage)}>
            <a>{prevPage}</a>
          </Link>
          </Button>
        ) : ``}
       </span>
        <Button variant="outlined" disabled >
          <span className="pager-item">{page}</span>
        </Button>
      <span className="pager-item">
        {nextPage ? (
          <Button color="primary" variant="outlined" endIcon={<ArrowForwardIosIcon/>}>
          <Link href={href} as={asCallback(nextPage)}>
            <a>{nextPage}</a>
          </Link>
          </Button>
        ) : ``}
      </span>
      <style jsx>{`
        .pager {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flew-wrap: nowrap;
        }
        .pager-item {
          margin: 0 1em;
        }
      `}</style>
    </div>
  )
}
export default Pager