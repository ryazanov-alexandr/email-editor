import { useQuery } from "@tanstack/react-query";
import styles from "./EmailList.module.scss";
import { emailService } from "../../sevices/email.service";

import parse from "html-react-parser";

export const EmailList = () => {
  const {data} = useQuery({
    queryKey: ['email list'],
    queryFn: () => emailService.getEmails()
  })

  console.log(data);
  

  return (
    <div className={styles.list}>
        {data?.map(email => (
        <div key={email.text}>
          {parse(email.text)}
        </div>
        ))}
    </div>
  );
};
