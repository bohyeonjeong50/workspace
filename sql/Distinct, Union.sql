
SELECT * FROM emp;
SELECT * FROM dept;

-- DISTINCT : 중복 제거
SELECT DISTINCT DEPTNO FROM emp;
SELECT DEPTNO FROM emp;

-- 이 쿼리의 실행 결과 예측
-- 모든 컬럼 앞에 DISTINCT 가 붙으면 나열한 모든 컬럼에 대해 중복을 제거
-- 컬럼이 여러개면 모든 컬럼의 값이 중복인 행만 제거
SELECT DEPTNO, JOB FROM emp; -- 14개 조회
SELECT DISTINCT DEPTNO, JOB FROM emp;	-- 11개 조회

-- UNION ALL, UNION : 두 개 이상의 SELECT를 동시에 진행
-- 각각의 조회문의 컬럼명은 달라도 쿼리 실행에 영향 X
-- 컬럼명은 달라도 되지만, 오라클에서 컬럼의 자료형이 다르면 오류
-- 각각의 SELECT 절의 컬럼의 수가 같아야 함
-- UNION ALL : 각 쿼리 결과 조회되는 데이터가 중복이더라도 조회
-- UNION : 각 쿼리의 실행 결과 중복 조회되는 데이터는 하나만 조회
SELECT EMPNO, ENAME, JOB FROM emp WHERE JOB = '사원'
UNION
SELECT EMPNO, ENAME, JOB FROM emp WHERE JOB = '사원';
 		

-- 모든 사원 급여의 평균보다 급여가 높은
-- 사원의 사번, 이름 급여를 조회
-- 서브쿼리 사용
-- WHERE 절에 서브쿼리가 있고
-- WHERE 절에 비교 연산이 '=' , '>', '<' 같이 크기비교 연산이라면
-- 서브쿼리의 조회 결과 행은 반드시 하나여야 한다.
SELECT EMPNO, ENAME, SAL
FROM emp
WHERE SAL = (SELECT AVG(SAL) FROM emp); 

-- 만약 WHERE 절에 서브쿼리의 질의 결과 여러 행의 데이터가 
-- 조회되면 IN 연산자를 사용하여 쿼리를 수행할 수 있다. 
SELECT EMPNO, ENAME, SAL
FROM emp
WHERE SAL IN (SELECT SAL FROM emp
               WHERE SAL > 500);

-- WHERE절의 서브쿼리 실행 결과 데이터가 여러 행 조회되면
-- IN 연산자말고, ALL, ANY 키워드를 사용할 수도 있다.
-- ALL : 서브쿼리 질의결과 조회되는 모든 데이터가 
-- 전부 조건에 만족하는 결과만 조회
-- ANY : 서브쿼리 질의결과 조회되는 데이터 중 
-- 하나라도 조건에 성립되면 조회
SELECT EMPNO, ENAME, SAL
FROM emp
WHERE SAL >= ALL (SELECT SAL FROM emp
               WHERE SAL > 500); -- 600, 520, 1000, 560
               
SELECT EMPNO, ENAME, SAL
FROM emp
WHERE SAL >= (SELECT MAX(SAL) FROM emp
               WHERE SAL > 500);               

SELECT EMPNO, ENAME, SAL
FROM emp
WHERE SAL >= ANY (SELECT SAL FROM emp
               WHERE SAL > 500); -- 600, 520, 1000, 560
               
SELECT EMPNO, ENAME, SAL
FROM emp
WHERE SAL >= (SELECT MIN(SAL) FROM emp
               WHERE SAL > 500);

SELECT DEPTNO, DNAME
FROM dept
WHERE EXISTS (SELECT *
					FROM EMP
					WHERE DEPTNO = dept.DEPTNO);
					
SELECT DEPTNO, DNAME
FROM dept
WHERE NOT EXISTS (SELECT *
					FROM EMP
					WHERE DEPTNO = dept.DEPTNO);					
					
SELECT DISTINCT DEPTNO FROM emp;	-- 10, 20, 30	
SELECT DISTINCT DEPTNO FROM dept; -- 10, 20, 30, 40		

               
               
               